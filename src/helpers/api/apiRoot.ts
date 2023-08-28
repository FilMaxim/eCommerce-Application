import { ClientApiData } from '../../utils/clientApiData';
import type { CustomerData } from '../../utils/types';
import { buildClientWithClientCredentialsFlow, buildClientWithPasswordFlow } from './BuildClient';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

const ctpClient = buildClientWithClientCredentialsFlow();
const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
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
  const authClient = buildClientWithPasswordFlow(email, password);
  const authApiRoot = createApiBuilderFromCtpClient(authClient).withProjectKey({
    projectKey: ClientApiData.projectKey
  });
  return await authApiRoot
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
  return await apiRoot.carts().withCustomerId({ customerId: id }).get().execute();
};

export const updateCustomerFirstName = async (
  id: string,
  version: number,
  newFirstName: string,
  newLastName: string
) => {
  return await apiRoot
    .customers()
    .withId({ ID: id })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'setFirstName',
            firstName: newFirstName
          },
          {
            action: 'setLastName',
            lastName: newLastName
          }
        ]
      }
    })
    .execute();
};

export const getProduct = async (id: string) => {
  try {
    const response = await apiRoot.productProjections().withId({ ID: id }).get().execute();
    console.log(response.body);

    return response.body;
  } catch (error) {
    console.log(error);
  }
};
