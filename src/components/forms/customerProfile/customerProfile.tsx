import { Input } from '../inputs/Input';
import { FieldSetName, inputsData } from '../inputs/inputsData';
import { AdressFieldSet } from '../inputs/AdressFieldSet';
import type { FormInnerComponent, ProfileInitialValues, RootState } from '../../../utils/types';
import { TabsPanel } from '../../tabs/tabPanel';
import { getInitialValues } from '../util/getInitialValuesFromCustomer';
import {
  customerAddressSchemaBoth,
  customerAddressSchemaShipping,
  customerPersonalDataSchema
} from '../util/validationSchema';
import { CustomerPageForm } from './CustomerPageForm';
import type { Customer, CustomerUpdateAction } from '@commercetools/platform-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomer } from '../../../helpers/api/apiRoot';
import { showToastMessage } from '../../../helpers/showToastMessage';
import { setCustomer } from '../../../slices/authSlice';

export const CustomerProfile = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const { firstName, lastName, date, email } = inputsData;
  const initialValues = getInitialValues(customer);
  const dispatch = useDispatch();

  const isBillingAddress = customer.addresses.length > 1;

  const onSubmit = (value: ProfileInitialValues) => {
    console.log(value);
  };

  const onPersonalDataSubmit = async (value: ProfileInitialValues) => {
    const actions = [] as CustomerUpdateAction[];
    if (value.firstName !== initialValues.firstName) {
      actions.push({
        action: 'setFirstName',
        firstName: value.firstName
      });
    }
    if (value.lastName !== initialValues.lastName) {
      actions.push({
        action: 'setLastName',
        lastName: value.lastName
      });
    }
    if (value.date !== initialValues.date) {
      actions.push({
        action: 'setDateOfBirth',
        dateOfBirth: value.date
      });
    }
    if (value.email !== initialValues.email) {
      actions.push({
        action: 'changeEmail',
        email: value.email
      });
    }
    console.log(actions);
    try {
      const response = await updateCustomer(customer.id, customer.version, actions);
      console.log(response);
      if (response.statusCode === 200) {
        const customer = response.body;
        showToastMessage('Profile successfully updated', 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
      } else {
        showToastMessage('Profile update failed, please try again later', 'red');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
