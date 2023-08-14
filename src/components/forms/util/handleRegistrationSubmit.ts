import { createCustomer } from '../../../helpers/api/apiRoot';
import { showToastMessage } from '../../../helpers/showToastMessage';
import type { HandleSubmitInterface, LoginInterface } from '../../../utils/types';
import { addressAdapter } from './addressDataAdapter';

const SUCCESSFUL_REGISTRATION_MESSAGE = 'Registration successful';
const EXISTING_CUSTOMER_ERROR = 'There is already an existing customer with the provided email.';
const EXISTING_CUSTOMER_MESSAGE =
  'Customer with this email already exist, login or create new account';
const OTHER_ERROR_MESSAGE = 'Registration failed, please try again later';

export const handleRegistrationSubmit = async (
  values: HandleSubmitInterface,
  login: (values: LoginInterface) => Promise<void>
): Promise<void> => {
  const normalizedData = addressAdapter(values);
  try {
    const response = await createCustomer(normalizedData);

    if (response.statusCode === 201) {
      // await login({
      //   email: values.email,
      //   password: values.password
      // });
      showToastMessage(SUCCESSFUL_REGISTRATION_MESSAGE, 'green');
    }
  } catch (error) {
    if (!(error instanceof Error)) return;

    error.message === EXISTING_CUSTOMER_ERROR
      ? showToastMessage(EXISTING_CUSTOMER_MESSAGE, 'red')
      : showToastMessage(OTHER_ERROR_MESSAGE, 'red');
  }
};
