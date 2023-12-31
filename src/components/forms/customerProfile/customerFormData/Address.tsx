import type {
  AddressComponentProps,
  AddressExtraControls,
  FormInnerComponent
} from '../../../../utils/types';
import { CustomerPageForm } from '../CustomerPageForm';
import { useState } from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
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

const AddressControls: AddressExtraControls = (editable: boolean, initialValues, formik) => {
  const checkboxes = Object.entries(initialValues).filter(([key, value]) => {
    if (
      typeof value === 'boolean' &&
      !((key === 'defaultShippingAddress' && value) || (key === 'defaultBillingAddress' && value))
    ) {
      return true;
    }
    return false;
  });
  if (!editable || checkboxes.length === 0) return null;

  return (
    <div className="flex min-w-[70%] flex-wrap justify-center gap-1 px-4">
      {checkboxes.map(([name, value]) => (
        <FormControlLabel
          key={name}
          control={
            <Checkbox
              name={name}
              color="secondary"
              onChange={(e) => {
                formik.handleChange(e.nativeEvent);
              }}
              defaultChecked={value}
            />
          }
          label={getCheckboxLabel(name)}
          labelPlacement="end"
        />
      ))}
    </div>
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
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsNewAddress(false);
              }
            }}
            role="textbox"
            tabIndex={-1}
            aria-labelledby="new-address"
          >
            <div className="mx-2 flex max-w-[42rem] flex-wrap items-center justify-center rounded bg-white p-6">
              <h3
                className="text-center"
                aria-label="new-address"
              >
                New address
              </h3>
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
        <h3 className="mb-10 text-center text-xl">You have no addresses yet...</h3>
        <NewAddressModal />
      </>
    );
  }

  return (
    <>
      {initialValues.map((address) => (
        <div
          key={address.id}
          className="mb-4 rounded border"
        >
          <div className="m-1 mb-[-2rem] flex max-w-[calc(100%-100px)] flex-wrap gap-1">
            {address.shippingStateChecked && (
              <span className="rounded border border-secondary bg-secondary-light text-xs">
                Shipping address
              </span>
            )}
            {address.billingStateChecked && (
              <span className="rounded border border-secondary bg-secondary-light text-xs">
                Billing address
              </span>
            )}
            {address.defaultShippingAddress && (
              <span className="rounded border border-secondary bg-secondary-light text-xs">
                Default shipping address
              </span>
            )}
            {address.defaultBillingAddress && (
              <span className="rounded border border-secondary bg-secondary-light text-xs">
                Default billing address
              </span>
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
      <NewAddressModal />
    </>
  );
};
