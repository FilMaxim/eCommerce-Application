import { createCustomer } from '../../../helpers/api/createCustomer';
import { requestAnonymousToken } from '../../../helpers/api/requestAnonymousToken';
import { showToastMessage } from '../../../helpers/showToastMessage';
import type { HandleSubminWithBoth, LoginInterface } from '../../../utils/types';
import { addressAdapter } from './addressDataAdapter';

export const handleRegistrationSubmit = async (
  values: HandleSubminWithBoth,
  login: (values: LoginInterface) => Promise<void>
): Promise<void> => {
  const normalizedData = addressAdapter(values);
  const accessToken = (await requestAnonymousToken()).accessToken;
  const response = await createCustomer(normalizedData, accessToken);
  const data = await response.json();

  if (response.ok) {
    await login({
      email: values.email,
      password: values.password
    });
    showToastMessage('Registration successful', 'green');
    return;
  }
  data.errors[0].code === 'DuplicateField'
    ? showToastMessage('Customer with this email already exist, login or create new account', 'red')
    : showToastMessage('Registration failed, please try again later', 'red');
};
