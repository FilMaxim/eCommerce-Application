import { ClientApiData } from '../../utils/clientApiData';
import type { CustomerData } from '../../utils/types';
import { buildClientWithClientCredentialsFlow, buildClientWithPasswordFlow } from './BuildClient';
import {
  createApiBuilderFromCtpClient,
  type CustomerChangeAddressAction,
  type CategoryPagedQueryResponse,
  type ProductProjectionPagedQueryResponse,
  type CustomerUpdateAction,
  type CustomerPagedQueryResponse,
  type ClientResponse,
  type CustomerSignInResult,
  type Cart,
  type Customer,
  type ProductProjection,
  type CartPagedQueryResponse,
  type MyCartDraft
} from '@commercetools/platform-sdk';

const ctpClient = buildClientWithClientCredentialsFlow();
const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: ClientApiData.projectKey
});

export const getCustomers = async (): Promise<ClientResponse<CustomerPagedQueryResponse>> => {
  return await apiRoot.customers().get().execute();
};

export const getCategories = async (): Promise<CategoryPagedQueryResponse> => {
  const response = await apiRoot.categories().get().execute();
  return response.body;
};

export const fetchProducts = async (): Promise<ProductProjectionPagedQueryResponse> => {
  const response = await apiRoot.productProjections().get().execute();
  return response.body;
};

export const fetchFilteredProducts = async (
  filter?: string | string[] | undefined,
  sort?: string,
  text?: string
): Promise<ProductProjectionPagedQueryResponse> => {
  const response = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        limit: 30,
        offset: 0,
        filter,
        markMatchingVariants: true,
        sort,
        'text.en-US': text
      }
    })
    .execute();

  return response.body;
};

export const createCustomer = async (data: CustomerData): Promise<ClientResponse<CustomerSignInResult>> => {
  return await apiRoot
    .customers()
    .post({
      body: data
    })
    .execute();
};

export const customerLogIn = async (
  email: string,
  password: string
): Promise<ClientResponse<CustomerSignInResult>> => {
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

export const getCustomerCarts = async (id: string): Promise<ClientResponse<Cart>> => {
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
): Promise<ClientResponse<Customer>> => {
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

export const getProduct = async (id: string): Promise<ProductProjection | undefined> => {
  try {
    const response = await apiRoot.productProjections().withId({ ID: id }).get().execute();
    return response.body;
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomerPassword = async (body: {
  id: string;
  version: number;
  currentPassword: string;
  newPassword: string;
}): Promise<ClientResponse<Customer>> => {
  return await apiRoot
    .customers()
    .password()
    .post({
      body
    })
    .execute();
};

// создать корзину (обьект корзины содержит валюту и кастомер айди или аноним айди) эти поля могут переназначаться
export const createCart = async (cart: MyCartDraft): Promise<ClientResponse<Cart>> => {
  return await apiRoot
    .carts()
    .post({
      body: cart
    })
    .execute();
};

// все корзины
export const getAllCarts = async (): Promise<ClientResponse<CartPagedQueryResponse>> => {
  return await apiRoot.carts().get().execute();
};

// получить корзину по ее айди
export const getCartWithId = async (id: string): Promise<ClientResponse<Cart>> => {
  return await apiRoot.carts().withId({ ID: id }).get().execute();
};

// получить корзину по айди кастомера (отдаст корзину или ошибку, если корзины нет)
export const getCartWithCustomerId = async (id: string): Promise<ClientResponse<Cart>> => {
  return await apiRoot.carts().withCustomerId({ customerId: id }).get().execute();
};
