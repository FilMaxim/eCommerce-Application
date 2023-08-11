import { createCustomer } from '../../../helpers/api/createCustomer';
import { showToastMessage } from '../../../helpers/showToastMessage';
import type { IHandleSignUpSubmit } from '../../../utils/types';
import { addressAdapter } from './addressDataAdapter';

export const handleRegistrationSubmit = async (values: IHandleSignUpSubmit) => {
  const normalizedData = addressAdapter(values);
  const response = await createCustomer(normalizedData);
  const data = await response.json();

  if (response.ok) {
    showToastMessage('Registration successful', 'green');
  } else if (data.errors[0].code === 'DuplicateField') {
    showToastMessage('Customer with this email already exist, login or create new account', 'red');
  } else {
    showToastMessage('Registration failed, please try again later', 'red');
  }
};
