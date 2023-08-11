import { createCustomer } from '../../../helpers/api/createCustomer';
import { requestAnonymousToken } from '../../../helpers/api/requestAnonymousToken';
import { showToastMessage } from '../../../helpers/showToastMessage';
import type { HandleSubmitInterface } from '../../../utils/types';
import { addressAdapter } from './addressDataAdapter';

export const handleRegistrationSubmit = async (values: HandleSubmitInterface) => {
  const normalizedData = addressAdapter(values);
  const accessToken = (await requestAnonymousToken()).accessToken;
  const response = await createCustomer(normalizedData, accessToken);
  const data = await response.json();

  if (response.ok) {
    showToastMessage('Registration successful', 'green');
  } else if (data.errors[0].code === 'DuplicateField') {
    showToastMessage('Customer with this email already exist, login or create new account', 'red');
  } else {
    showToastMessage('Registration failed, please try again later', 'red');
  }
};
