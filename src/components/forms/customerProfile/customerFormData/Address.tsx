import type {
  AddressComponentProps,
  AddressExtraControls,
  FormInnerComponent
} from '../../../../utils/types';
import { CustomerPageForm } from '../CustomerPageForm';
import { Field } from 'formik';
import { useState } from 'react';
import { Button } from '@mui/material';
import { newAddressInitialValues } from '../util/getInitialValues';
import { getCheckboxLabel } from '../util/getCheckboxLabel';
import { AddressFieldSet } from '../../inputs/AddressFieldSet';

const AddressInner: FormInnerComponent = (editable: boolean, formik) => {
  return (
    <AddressFieldSet
      formik={formik}
      disabled={!editable}
    />
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

  const NewAddressModal = () => {
    return (
      <>
        {!isNewAddress && (
          <Button
            onClick={() => {
              setIsNewAddress(!isNewAddress);
            }}
            variant="contained"
            color="secondary"
          >
            Add new address
          </Button>
        )}
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
                formInner={AddressInner}
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
      <div className="mb-2 rounded border">
        {initialValues.map((address) => (
          <div
            key={address.id}
            className="mb-4"
          >
            <div className="m-1 mb-[-2rem] flex max-w-[calc(100%-100px)] flex-wrap gap-1">
              {address.shippingStateChecked && (
                <span className="rounded border bg-secondary-light text-xs">Shipping address</span>
              )}
              {address.billingStateChecked && (
                <span className="rounded border bg-secondary-light text-xs">Billing address</span>
              )}
              {address.defaultShippingAddress && (
                <span className="rounded border bg-secondary-light text-xs">Default shipping address</span>
              )}
              {address.defaultBillingAddress && (
                <span className="rounded border bg-secondary-light text-xs">Default billing address</span>
              )}
              <div className="h-6 w-1"></div> {/* filler */}
            </div>
            <CustomerPageForm
              initialValues={address}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              formInner={AddressInner}
              addressExtraControls={AddressControls}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
      <NewAddressModal />
    </>
  );
};
