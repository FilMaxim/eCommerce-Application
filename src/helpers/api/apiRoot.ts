import { ClientApiData } from '../../utils/clientApiData';
import type { CustomerData } from '../../utils/types';
import { buildClientWithClientCredentialsFlow, buildClientWithPasswordFlow } from './BuildClient';
import {
  type CustomerUpdateAction,
  createApiBuilderFromCtpClient,
  type CustomerChangeAddressAction
} from '@commercetools/platform-sdk';

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
  return await apiRoot
    .carts()
    .withCustomerId({
      customerId: id
    })
    .get()
    .execute();
};

export const updateCustomer = async (
  id: string,
  version: number,
  actions: CustomerUpdateAction[] | CustomerChangeAddressAction[]
) => {
  return await apiRoot
    .customers()
    .withId({
      ID: id
    })
    .post({
      body: {
        version,
        actions
      }
    })
    .execute();
};

export const updateCustomerPassword = async (body: {
  id: string;
  version: number;
  currentPassword: string;
  newPassword: string;
}) => {
  return await apiRoot
    .customers()
    .password()
    .post({
      body
    })
    .execute();
};
