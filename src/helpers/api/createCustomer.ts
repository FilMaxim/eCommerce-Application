import { endpoints } from '../../utils/clientApiData';
import type { CustomerData } from '../../utils/types';

export const createCustomer = async (
  data: CustomerData,
  accessToken: string
): Promise<Response> => {
  return await fetch(endpoints.customers, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
