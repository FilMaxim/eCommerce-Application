import { Input } from '../inputs/Input';
import { FieldSetName, inputsData } from '../inputs/inputsData';
import { AdressFieldSet } from '../inputs/AdressFieldSet';
import type { FormInnerComponent, RootState } from '../../../utils/types';
import { TabsPanel } from '../../tabs/tabPanel';
import { getInitialValues } from '../util/getInitialValuesFromCustomer';
import {
  customerAddressSchemaBoth,
  customerAddressSchemaShipping,
  customerPersonalDataSchema
} from '../util/validationSchema';
import { CustomerPageForm } from './CustomerPageForm';
import type { Customer } from '@commercetools/platform-sdk';
import { useSelector } from 'react-redux';
import { useUpdateCustomer } from '../../../hooks/useUpdateCustomer';

export const CustomerProfile = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const { firstName, lastName, date, email } = inputsData;
  const initialValues = getInitialValues(customer);
  const [onPersonalDataSubmit, onSubmit] = useUpdateCustomer();

  const isBillingAddress = customer.addresses.length > 1;

  const PersonalData: FormInnerComponent = (editable: boolean, formik) => {
    return [firstName, lastName, date, email].map(({ name, placeholder, type }) => (
      <Input
        key={name}
        name={name}
        placeholder={placeholder}
        type={type}
        disabled={!editable}
        formik={formik}
      />
    ));
  };

  const AddressData: FormInnerComponent = (editable: boolean, formik) => {
    return (
      <div className="flex flex-wrap justify-center gap-2">
        <div className="relative">
          {!isBillingAddress && (
            <span className="absolute right-2 top-1 text-sm text-gray-500">*same as billing</span>
          )}
          <AdressFieldSet
            fieldSet={FieldSetName.Shipping}
            formik={formik}
            disabled={!editable}
          />
        </div>
        {isBillingAddress && (
          <AdressFieldSet
            fieldSet={FieldSetName.Billing}
            formik={formik}
            disabled={!editable}
          />
        )}
      </div>
    );
  };

  return (
    <div className="m-auto mt-4 max-w-[42rem] rounded border p-2">
      <TabsPanel
        children1={
          <CustomerPageForm
            initialValues={initialValues}
            onSubmit={onPersonalDataSubmit}
            validationSchema={customerPersonalDataSchema}
            formInner={PersonalData}
          />
        }
        children2={
          <CustomerPageForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={isBillingAddress ? customerAddressSchemaBoth : customerAddressSchemaShipping}
            formInner={AddressData}
          />
        }
        children3={'Chenge Password would be here'}
      />
    </div>
  );
};
