import type { RootState } from '../../../utils/types';
import { TabsPanel } from '../../tabs/TabsPanel';
import { getAddressesInitialValues, getPersonalDataInitialValues } from './util/getInitialValues';
import {
  customerAddressSchema,
  customerPersonalDataSchema,
  passwordChangeSchema
} from '../util/validationSchema';
import { CustomerPageForm } from './CustomerPageForm';
import type { Customer } from '@commercetools/platform-sdk';
import { useSelector } from 'react-redux';
import { useUpdateCustomer } from '../../../hooks/useUpdateCustomer';
import { PersonalData } from './customerFormData/PersonalData';
import { AddressComponent } from './customerFormData/Address';
import { PasswordChange } from './customerFormData/PasswordChange';

export const CustomerProfile = () => {
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
    <div className="m-auto mt-4 max-w-[42rem] rounded border p-2">
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
