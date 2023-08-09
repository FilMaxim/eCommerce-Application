import { apiPaths } from '../../utils/clientApiData';
import { getAccessToken } from './getAccessToken';

interface ICustomerData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const createCustomer = async (data: ICustomerData): Promise<Response> => {
  const accessToken = await getAccessToken();

  return await fetch(apiPaths.CUSTOMERS, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
