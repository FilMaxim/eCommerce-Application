import { apiPaths } from '../../utils/clientApiData';
import type { ICustomerData } from '../../utils/types';

export const createCustomer = async (
  data: ICustomerData,
  accessToken: string
): Promise<Response> => {
  return await fetch(apiPaths.CUSTOMERS, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
