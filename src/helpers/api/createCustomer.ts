import { apiPaths } from '../../utils/clientApiData';
import type { ICustomerData } from '../../utils/types';
import { getAccessToken } from './getAccessToken';

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
