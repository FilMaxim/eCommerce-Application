import type { AuthReturnInterface, HandleSubmitWithBoth, LoginInterface } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '../utils/routes';
import { createCustomer, customerLogIn } from '../helpers/api/apiRoot';
import { showToastMessage } from '../helpers/showToastMessage';
import { addressAdapter } from '../components/forms/util/addressDataAdapter';
import { AuthMessages } from '../components/forms/util/authMessages';
import { setCustomer, setLogged } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { type Customer } from '@commercetools/platform-sdk';
import { StatusCodes } from '../utils/statusCodes';

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
    dispatch(setCustomer(null));
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
