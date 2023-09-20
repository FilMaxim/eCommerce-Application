import type { Customer } from '@commercetools/platform-sdk';
import { useSelector } from 'react-redux';
import { CustomerPageForm } from '../components/forms/customerProfile/CustomerPageForm';
import { AddressComponent } from '../components/forms/customerProfile/customerFormData/Address';
import { PasswordChange } from '../components/forms/customerProfile/customerFormData/PasswordChange';
import { PersonalData } from '../components/forms/customerProfile/customerFormData/PersonalData';
import {
  getPersonalDataInitialValues,
  getAddressesInitialValues
} from '../components/forms/customerProfile/util/getInitialValues';
import {
  customerPersonalDataSchema,
  customerAddressSchema,
  passwordChangeSchema
} from '../components/forms/util/validationSchema';
import { TabsPanel } from '../components/tabs/TabsPanel';
import { useUpdateCustomer } from '../hooks/useUpdateCustomer';
import type { RootState } from '../utils/types';

export const UserProfilePage = () => {
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer) as Customer;
  const { onPersonalDataSubmit, onAddressChangeSubmit, onPasswordChangeSubmit, onAddressDelete } =
    useUpdateCustomer();
  const personalDataInitialValues = getPersonalDataInitialValues(customer);
  const passwordChangeInitialValues = {
    currentPassword: '',
    newPassword: ''
  };
  const addressInitialValues = getAddressesInitialValues(customer);

  return (
    <div className="mx-auto mb-auto flex max-w-[42rem] flex-col items-center justify-start rounded border p-2">
      <TabsPanel titles={['Personal Information', 'Addresses', 'Change Password']}>
        <CustomerPageForm
          initialValues={personalDataInitialValues}
          // todo: how to implement without catch
          onSubmit={(value) => {
            onPersonalDataSubmit(value).catch((e) => {
              Error(e);
            });
          }}
          validationSchema={customerPersonalDataSchema}
          formInner={PersonalData}
        />
        <AddressComponent
          initialValues={addressInitialValues}
          validationSchema={customerAddressSchema}
          onSubmit={(values) => {
            onAddressChangeSubmit(values).catch((err) => {
              Error(err);
            });
          }}
          onDelete={onAddressDelete}
        />
        <CustomerPageForm
          initialValues={passwordChangeInitialValues}
          onSubmit={(value) => {
            onPasswordChangeSubmit(value).catch((e) => {
              Error(e);
            });
          }}
          validationSchema={passwordChangeSchema}
          formInner={PasswordChange}
        />
      </TabsPanel>
    </div>
  );
};
