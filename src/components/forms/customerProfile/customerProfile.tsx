import { Input } from '../inputs/Input';
import { inputsData } from '../inputs/inputsData';
import type { FormInnerComponent, RootState } from '../../../utils/types';
import { TabsPanel } from '../../tabs/tabPanel';
import {
  getAddressesInitialValues,
  getPersonalDataInitialValues
} from '../util/getInitialValuesFromCustomer';
import {
  customerAddressSchema,
  customerPersonalDataSchema,
  passwordChangeSchema
} from '../util/validationSchema';
import { CustomerPageForm } from './CustomerPageForm';
import type { Customer } from '@commercetools/platform-sdk';
import { useSelector } from 'react-redux';
import { useUpdateCustomer } from '../../../hooks/useUpdateCustomer';
import { PasswordInput } from '../inputs/PasswordInput';

export const CustomerProfile = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const { firstName, lastName, date, email } = inputsData;
  const personalDataInitialValues = getPersonalDataInitialValues(customer);
  const passwordChangeInitialValues = {
    currentPassword: '',
    newPassword: ''
  };
  const addressInitialValues = getAddressesInitialValues(customer);

  const { onPersonalDataSubmit, onSubmit, onPasswordChangeSubmit } = useUpdateCustomer();

  // const isBillingAddress = customer.addresses.length > 1;

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

  const PasswordChange: FormInnerComponent = (editable: boolean, formik) => {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <PasswordInput
          placeholder="Current Password:"
          formik={formik}
          disabled={!editable}
          name="currentPassword"
        />
        <PasswordInput
          placeholder="New Password:"
          formik={formik}
          disabled={!editable}
          name="newPassword"
        />
      </div>
    );
  };

  return (
    <div className="m-auto mt-4 max-w-[42rem] rounded border p-2">
      <TabsPanel
        children1={
          <CustomerPageForm
            initialValues={personalDataInitialValues}
            // todo: how to implement without catch
            onSubmit={(value) => {
              onPersonalDataSubmit(value).catch((e) => {
                console.error(e);
              });
            }}
            validationSchema={customerPersonalDataSchema}
            formInner={PersonalData}
          />
        }
        children2={addressInitialValues.map((address, index) => (
          <CustomerPageForm
            key={customer.addresses[index].id}
            initialValues={address}
            onSubmit={onSubmit}
            validationSchema={customerAddressSchema}
            formInner={AddressData}
          />
        ))}
        children3={
          <CustomerPageForm
            initialValues={passwordChangeInitialValues}
            // todo: how to implement without catch
            onSubmit={(value) => {
              onPasswordChangeSubmit(value).catch((e) => {
                console.error(e);
              });
            }}
            validationSchema={passwordChangeSchema}
            formInner={PasswordChange}
          />
        }
      />
    </div>
  );
};
