import type { RootState } from '../../../utils/types';
import { TabsPanel } from '../../tabs/tabPanel';
import { getAddressesInitialValues, getPersonalDataInitialValues } from './util/getInitialValuesFromCustomer';
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
import { PasswordChange } from './customerFormData/PasswordChange';
import { AddressComponent } from './customerFormData/AddressData';

export const CustomerProfile = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const { onPersonalDataSubmit, onAddressChangeSubmit, onPasswordChangeSubmit } = useUpdateCustomer();
  const personalDataInitialValues = getPersonalDataInitialValues(customer);
  const passwordChangeInitialValues = {
    currentPassword: '',
    newPassword: ''
  };
  const addressInitialValues = getAddressesInitialValues(customer);

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
        children2={
          <AddressComponent
            initialValues={addressInitialValues}
            validationSchema={customerAddressSchema}
            onSubmit={(values) => {
              onAddressChangeSubmit(values).catch((err) => {
                console.error(err);
              });
            }}
          />
        }
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
