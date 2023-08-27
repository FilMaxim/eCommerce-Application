import type { Customer } from '@commercetools/platform-sdk';
import { useSelector } from 'react-redux';
import type {
  AddressesInitialValues,
  FormInnerComponent,
  InitialValuesCustomerPage,
  RootState
} from '../../../../utils/types';
import { Input } from '../../inputs/Input';
import { CustomerPageForm } from '../CustomerPageForm';
import type * as yup from 'yup';

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
        <div key={customer.addresses[index].id}>
          <div className="mb-[-2rem]">
            {address.shippingStateChecked && <span>Shipping address</span>}
            {address.billingStateChecked && <span>Billing address</span>}
            {address.defaultShippingAddress && <span>Default shipping address</span>}
            {address.defaultBillingAddress && <span>Default billing address</span>}
          </div>
          <CustomerPageForm
            initialValues={address}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            formInner={AddressData}
          />
        </div>
      ))}
    </>
  );
};
