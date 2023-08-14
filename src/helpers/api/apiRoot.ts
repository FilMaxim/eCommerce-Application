import { ClientApiData } from '../../utils/clientApiData';
import type { CustomerData } from '../../utils/types';
import { ctpClient } from './BuildClient';
import {
  // ApiRoot,
  createApiBuilderFromCtpClient
} from '@commercetools/platform-sdk';

// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient)
  .withProjectKey({
    projectKey: ClientApiData.projectKey
  });

export const getCustomers = async () => {
  return await apiRoot.customers().get().execute();
};

export const createCustomer = async (data: CustomerData) => {
  return await apiRoot
    .customers()
    .post({
      body: data
    })
    .execute();
};

export const customerLogIn = async (email: string, password: string) => {
  return await apiRoot
    .login()
    .post({
      body: {
        email,
        password
      }
    })
    .execute();
};

export const getCustomerCarts = async (id: string) => {
  return await apiRoot
    .carts()
    .withCustomerId({ customerId: id })
    .get()
    .execute();
};

export const updateCustomerFirstName = async (id: string, version: number) => {
  return await apiRoot
    .customers()
    .withId({ ID: id })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'setFirstName',
            firstName: 'JohnnyBoy'
          }
        ]
      }
    })
    .execute();
};
