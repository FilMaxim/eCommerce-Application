import { apiPaths } from '../../utils/clientApiData';
import { getAccessToken } from './getAccessToken';

export interface ICustomerData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  addresses: [
    {
      country: string;
      firstName: string;
      lastName: string;
      streetName: string;
      postalCode: string;
      city: string;
      email: string;
    }
  ];
  salutation: string;
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
