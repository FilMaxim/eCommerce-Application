import type { FormInnerComponent, RootState } from '../../../utils/types';
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
import { AddressComponent } from './customerFormData/AddressData';
import { PasswordInput } from '../inputs/PasswordInput';

export const CustomerProfile = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const { onPersonalDataSubmit, onAddressChangeSubmit, onPasswordChangeSubmit, onAddressDelete } =
    useUpdateCustomer();
  const personalDataInitialValues = getPersonalDataInitialValues(customer);
  const passwordChangeInitialValues = {
    currentPassword: '',
    newPassword: ''
  };
  const addressInitialValues = getAddressesInitialValues(customer);

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
      <TabsPanel titles={['Personal Information', 'Addresses', 'Change Password']}>
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
        <AddressComponent
          initialValues={addressInitialValues}
          validationSchema={customerAddressSchema}
          onSubmit={(values) => {
            onAddressChangeSubmit(values).catch((err) => {
              console.error(err);
            });
          }}
          onDelete={onAddressDelete}
        />
        <CustomerPageForm
          initialValues={passwordChangeInitialValues}
          onSubmit={(value) => {
            onPasswordChangeSubmit(value).catch((e) => {
              console.error(e);
            });
          }}
          validationSchema={passwordChangeSchema}
          formInner={PasswordChange}
        />
      </TabsPanel>
    </div>
  );
};
