import type {
  AddressComponentProps,
  AddressExtraControls,
  FormInnerComponent
} from '../../../../utils/types';
import { Input } from '../../inputs/Input';
import { CustomerPageForm } from '../CustomerPageForm';
import { Field } from 'formik';
import { useState } from 'react';
import { Button } from '@mui/material';
import { newAddressInitialValues } from '../util/getInitialValues';
import { getCheckboxLabel } from '../util/getCheckboxLabel';

const AddressData: FormInnerComponent = (editable: boolean, formik) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {['country', 'streetName', 'postalCode', 'city'].map((name, index) => (
        <Input
          key={`${name}${index}`}
          name={name}
          placeholder={name[0].toUpperCase() + name.slice(1)}
          type="text"
          disabled={!editable}
          formik={formik}
        />
      ))}
    </div>
  );
};

const AddressControls: AddressExtraControls = (editable: boolean, initialValues) => {
  const checkboxes = Object.entries(initialValues).filter(([key, value]) => {
    if (
      typeof value === 'boolean' &&
      !((key === 'defaultShippingAddress' && value) || (key === 'defaultBillingAddress' && value))
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      {editable &&
        checkboxes.map(([name, value]) => (
          <label key={name}>
            <Field
              type="checkbox"
              name={name}
            />
            {getCheckboxLabel(name)}
          </label>
        ))}
    </>
  );
};

export const AddressComponent = ({
  onSubmit,
  initialValues,
  validationSchema,
  onDelete
}: AddressComponentProps) => {
  const [isNewAddress, setIsNewAddress] = useState<boolean>(false);

  const handleClick = () => {
    setIsNewAddress(!isNewAddress);
  };

  const NewAddressModal = () => {
    return (
      <>
        {!isNewAddress && <Button onClick={handleClick}>Add new address</Button>}
        {isNewAddress && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsNewAddress(false);
              }
            }}
          >
            <div className="mx-2 flex max-w-[42rem] flex-wrap items-center justify-center rounded bg-white p-6">
              <h3 className="text-center">New address</h3>
              <CustomerPageForm
                initialValues={newAddressInitialValues}
                onSubmit={(value) => {
                  onSubmit(value);
                  setIsNewAddress(false);
                }}
                validationSchema={validationSchema}
                formInner={AddressData}
                isEditable={true}
                unsetNewForm={setIsNewAddress}
              />
            </div>
          </div>
        )}
      </>
    );
  };

  if (initialValues.length === 0) {
    return (
      <>
        <h3>You have no addresses yet...</h3>
        <NewAddressModal />
      </>
    );
  }

  return (
    <>
      {initialValues.map((address) => (
        <div
          key={address.id}
          className="mb-4"
        >
          <div className="mb-[-2.5rem] pt-4">
            {address.shippingStateChecked && (
              <span className="mr-1 rounded border bg-slate-200 text-xs">Shipping address</span>
            )}
            {address.billingStateChecked && (
              <span className="mr-1 rounded border bg-slate-200 text-xs">Billing address</span>
            )}
            {address.defaultShippingAddress && (
              <span className="mr-1 rounded border bg-slate-200 text-xs">Default shipping address</span>
            )}
            {address.defaultBillingAddress && (
              <span className="mr-1 rounded border bg-slate-200 text-xs">Default billing address</span>
            )}
          </div>
          <CustomerPageForm
            initialValues={address}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            formInner={AddressData}
            addressExtraControls={AddressControls}
            onDelete={onDelete}
          />
        </div>
      ))}
      <NewAddressModal />
    </>
  );
};