import type { Customer } from '@commercetools/platform-sdk';
import { useSelector } from 'react-redux';
import type {
  AddressExtraControls,
  AddressesInitialValues,
  FormInnerComponent,
  InitialValuesCustomerPage,
  RootState
} from '../../../../utils/types';
import { Input } from '../../inputs/Input';
import { CustomerPageForm } from '../CustomerPageForm';
import type * as yup from 'yup';
import { Field } from 'formik';

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
  const stateList = Object.entries(initialValues).filter(([key, value]) => typeof value === 'boolean');

  return (
    <>
      {editable &&
        stateList.map(([name, value]) => (
          <label key={name}>
            <Field
              type="checkbox"
              name={name}
            />
            {name}
          </label>
        ))}
    </>
  );
};

export const AddressComponent = ({
  onSubmit,
  initialValues,
  validationSchema
}: {
  // todo: add interface
  onSubmit: (values: InitialValuesCustomerPage) => void;
  initialValues: AddressesInitialValues[];
  validationSchema: yup.Schema;
}) => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;

  if (initialValues.length === 0) {
    return <h3>No addresses</h3>;
  }

  return (
    <>
      {initialValues.map((address, index) => (
        <div
          key={customer.addresses[index].id}
          className="mb-4"
        >
          <div className="mb-[-2.5rem]">
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
          />
        </div>
      ))}
    </>
  );
};
