import { useState } from 'react';
import type { AuthReturnInterface, HandleSubmitInterface, LoginInterface } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '../utils/routes';
import { createCustomer, customerLogIn } from './api/apiRoot';
import { showToastMessage } from './showToastMessage';
import { addressAdapter } from '../components/forms/util/addressDataAdapter';
import { AuthMessages } from '../components/forms/util/authMessages';
import { setLogged } from '../slices/authSlice';
import { useDispatch } from 'react-redux';

export const useAuth = (): AuthReturnInterface => {
  const [userId] = useState(localStorage.getItem('id'));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const successfulAuth = (id: string, message: string) => {
    showToastMessage(message, 'green');
    localStorage.setItem('id', id);
    navigate({ pathname: NavRoutes.mainPagePath });
    dispatch(setLogged(true));
  };

  const login = async ({ email, password }: LoginInterface): Promise<void> => {
    try {
      const response = await customerLogIn(email, password);

      if (response.statusCode === 200) {
        successfulAuth(response.body.customer.id, AuthMessages.SUCCESSFUL_LOGIN_MESSAGE);
      }
    } catch (error) {
      showToastMessage(AuthMessages.FAILED_LOGIN_MESSAGE, 'red');
    }
  };

  const logout = (): void => {
    localStorage.clear();
    dispatch(setLogged(false));
  };

  const signUp = async (values: HandleSubmitInterface): Promise<void> => {
    try {
      const normalizedData = addressAdapter(values);
      const response = await createCustomer(normalizedData);

      if (response.statusCode === 201) {
        successfulAuth(response.body.customer.id, AuthMessages.SUCCESSFUL_REGISTRATION_MESSAGE);
      }
    } catch (error) {
      if (!(error instanceof Error)) return;

      error.message === AuthMessages.EXISTING_CUSTOMER_ERROR
        ? showToastMessage(AuthMessages.EXISTING_CUSTOMER_MESSAGE, 'red')
        : showToastMessage(AuthMessages.OTHER_ERROR_MESSAGE, 'red');
    }
  };

  return { login, logout, signUp, userId };
};
