import type { InitialValuesCustomerPage, RootState } from '../utils/types';
import { updateCustomer, updateCustomerPassword } from '../helpers/api/apiRoot';
import { showToastMessage } from '../helpers/showToastMessage';
import { setCustomer } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { type CustomerUpdateAction, type Customer } from '@commercetools/platform-sdk';
import { getPersonalDataInitialValues } from '../components/forms/util/getInitialValuesFromCustomer';
import { StatusCodes } from '../utils/statusCodes';

export const useUpdateCustomer = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const dispatch = useDispatch();
  const personalDataInitialValues = getPersonalDataInitialValues(customer);

  const onPersonalDataSubmit = async (value: InitialValuesCustomerPage): Promise<void> => {
    if (!('firstName' in value)) return;

    const actions = [] as CustomerUpdateAction[];
    // todo: implement switch-case
    if (value.firstName !== personalDataInitialValues.firstName) {
      actions.push({
        action: 'setFirstName',
        firstName: value.firstName
      });
    }
    if (value.lastName !== personalDataInitialValues.lastName) {
      actions.push({
        action: 'setLastName',
        lastName: value.lastName
      });
    }
    if (value.date !== personalDataInitialValues.date) {
      actions.push({
        action: 'setDateOfBirth',
        dateOfBirth: value.date
      });
    }
    if (value.email !== personalDataInitialValues.email) {
      actions.push({
        action: 'changeEmail',
        email: value.email
      });
    }

    if (actions.length === 0) return;

    try {
      const response = await updateCustomer(customer.id, customer.version, actions);

      if (response.statusCode === StatusCodes.OK) {
        const customer = response.body;
        showToastMessage('Profile successfully updated', 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
        return;
      }

      showToastMessage('Profile update failed, please try again later', 'red');
    } catch (error) {
      showToastMessage('Profile update failed, please try again later', 'red');
    }
  };

  const onSubmit = async (value: InitialValuesCustomerPage) => {
    console.log(value);
  };

  const onPasswordChangeSubmit = async (value: InitialValuesCustomerPage): Promise<void> => {
    if (!('newPassword' in value)) return;

    const body = {
      id: customer.id,
      version: customer.version,
      currentPassword: value.currentPassword,
      newPassword: value.newPassword
    };

    try {
      const response = await updateCustomerPassword(body);
      if (response.statusCode === StatusCodes.OK) {
        const customer = response.body;
        showToastMessage('Password successfully updated', 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
      }
    } catch (error) {
      showToastMessage('Password update failed, please try again later', 'red');
    }
  };

  return { onPersonalDataSubmit, onSubmit, onPasswordChangeSubmit };
};
