import type { ProfileInitialValues, RootState } from '../utils/types';
import { updateCustomer } from '../helpers/api/apiRoot';
import { showToastMessage } from '../helpers/showToastMessage';
import { setCustomer } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { type CustomerUpdateAction, type Customer } from '@commercetools/platform-sdk';
import { getInitialValues } from '../components/forms/util/getInitialValuesFromCustomer';
import { StatusCodes } from '../utils/statusCodes';

export const useUpdateCustomer = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const dispatch = useDispatch();
  const initialValues = getInitialValues(customer);

  const onPersonalDataSubmit = async (value: ProfileInitialValues) => {
    const actions = [] as CustomerUpdateAction[];
    // todo: implement switch-case
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
      console.error(error);
    }
  };

  const onSubmit = (value: ProfileInitialValues) => {
    console.log(value);
  };

  return [onPersonalDataSubmit, onSubmit];
};
