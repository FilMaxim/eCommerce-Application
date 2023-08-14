import { useState } from 'react';
import type { AuthReturnInterface, HandleSubmitInterface, LoginInterface } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '../utils/routes';
import { createCustomer, customerLogIn } from './api/apiRoot';
import { showToastMessage } from './showToastMessage';
import { addressAdapter } from '../components/forms/util/addressDataAdapter';
import { AuthMessages } from '../components/forms/util/authMessages';

export const useAuth = (): AuthReturnInterface => {
  const [userId] = useState(localStorage.getItem('id'));
  const isLogged = Boolean(userId);
  const navigate = useNavigate();

  const successfulAuth = (id: string, message: string) => {
    showToastMessage(message, 'green');
    localStorage.setItem('id', id);
    navigate({ pathname: NavRoutes.mainPagePath });
  };

  const login = async ({ email, password }: LoginInterface): Promise<void> => {
    try {
      const {
        statusCode,
        body: { customer }
      } = await customerLogIn(email, password);

      if (statusCode === 200) {
        successfulAuth(customer.id, AuthMessages.successLoginMessage);
      }
    } catch (error) {
      showToastMessage(AuthMessages.failedLoginMessage, 'red');
    }
  };

  const signUp = async (values: HandleSubmitInterface): Promise<void> => {
    try {
      const normalizedData = addressAdapter(values);
      const {
        statusCode,
        body: { customer }
      } = await createCustomer(normalizedData);

      if (statusCode === 201) {
        successfulAuth(customer.id, AuthMessages.successRegistrationMessage);
      }
    } catch (error) {
      if (!(error instanceof Error)) return;

      error.message === AuthMessages.existingCustomerError
        ? showToastMessage(AuthMessages.existingCustomerError, 'red')
        : showToastMessage(AuthMessages.otherErrorMessage, 'red');
    }
  };

  return { login, signUp, isLogged, userId };
};
