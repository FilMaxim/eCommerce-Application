import type {
  AuthReturnInterface,
  HandleSubmitWithBoth,
  LoginInterface,
  ProfileInitialValues,
  RootState
} from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '../utils/routes';
import { createCustomer, customerLogIn, updateCustomer } from './api/apiRoot';
import { showToastMessage } from './showToastMessage';
import { addressAdapter } from '../components/forms/util/addressDataAdapter';
import { AuthMessages } from '../components/forms/util/authMessages';
import { setCustomer, setLogged } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { type CustomerUpdateAction, type Customer } from '@commercetools/platform-sdk';
import { getInitialValues } from '../components/forms/util/getInitialValuesFromCustomer';

enum StatusCodes {
  OK = 200,
  CREATED = 201
}

export const useAuth = (): AuthReturnInterface => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const successfulAuth = (customer: Customer, message: string) => {
    showToastMessage(message, 'green');
    localStorage.setItem('customer', JSON.stringify(customer));
    navigate({ pathname: NavRoutes.mainPagePath });
    dispatch(setLogged(true));
    dispatch(setCustomer(customer));
  };

  const login = async ({ email, password }: LoginInterface): Promise<void> => {
    try {
      const {
        statusCode,
        body: { customer }
      } = await customerLogIn(email, password);

      if (statusCode === StatusCodes.OK) {
        successfulAuth(customer, AuthMessages.successLoginMessage);
      }
    } catch (error) {
      showToastMessage(AuthMessages.failedLoginMessage, 'red');
    }
  };

  const logout = (): void => {
    localStorage.clear();
    dispatch(setLogged(false));
  };

  const signUp = async (values: HandleSubmitWithBoth): Promise<void> => {
    try {
      const normalizedData = addressAdapter(values);
      const { statusCode } = await createCustomer(normalizedData);

      if (statusCode === StatusCodes.CREATED) {
        showToastMessage(AuthMessages.successRegistrationMessage, 'green');
        await login({ email: values.email, password: values.password });
      }
    } catch (error) {
      if (!(error instanceof Error)) return;

      error.message === AuthMessages.existingCustomerError
        ? showToastMessage(AuthMessages.existingCustomerMessage, 'red')
        : showToastMessage(AuthMessages.otherErrorMessage, 'red');
    }
  };

  return { login, logout, signUp };
};

export const useUpdateCustomer = () => {
  const customer = useSelector<RootState>((state: RootState) => state.customer) as Customer;
  const dispatch = useDispatch();
  const initialValues = getInitialValues(customer);

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

    if (actions.length === 0) return;

    try {
      const response = await updateCustomer(customer.id, customer.version, actions);

      if (response.statusCode === StatusCodes.OK) {
        const customer = response.body;
        showToastMessage('Profile successfully updated', 'green');
        localStorage.setItem('customer', JSON.stringify(customer));
        dispatch(setCustomer(customer));
      } else {
        showToastMessage('Profile update failed, please try again later', 'red');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (value: ProfileInitialValues) => {
    console.log(value);
  };

  return [onPersonalDataSubmit, onSubmit];
};
