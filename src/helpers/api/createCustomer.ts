import { apiPaths } from '../../utils/clientApiData';
import { getAuthToken } from './getAuthToken';

interface ICustomerData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const createCustomer = async (data: ICustomerData) => {
  const accessToken = await getAuthToken();

  return await fetch(apiPaths.CUSTOMERS, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
