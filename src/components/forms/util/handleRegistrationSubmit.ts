import { createCustomer } from '../../../helpers/api/createCustomer';
import { showToastMassage } from '../../../helpers/showToastMassage';

interface IHandleSubmit {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  date: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export const handleRegistrationSubmit = async (values: IHandleSubmit) => {
  const response = await createCustomer(values);

  if (response.ok) {
    showToastMassage('Registration successful', 'green');
  } else {
    showToastMassage('Registration failed', 'red');
  }
  console.log(await response.json());
};
