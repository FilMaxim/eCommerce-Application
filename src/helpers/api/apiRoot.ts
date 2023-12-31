import { ClientApiData } from '../../utils/clientApiData';
import type { CustomerData, QueryArgs } from '../../utils/types';
import {
  buildClientWithAnonymousSessionFlow,
  buildClientWithClientCredentialsFlow,
  buildClientWithPasswordFlow
} from './BuildClient';
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
  type MyCartDraft,
  type CartUpdateAction,
  type DiscountCodeDraft,
  type DiscountCodePagedQueryResponse,
  type DiscountCode,
  type CartDiscount,
  type CartDiscountUpdateAction
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
  queryArgs: QueryArgs
): Promise<ProductProjectionPagedQueryResponse> => {
  const limit = queryArgs.limit ?? 200;
  const response = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        fuzzy: true,
        markMatchingVariants: true,
        ...queryArgs,
        limit
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
const anonymousClient = buildClientWithAnonymousSessionFlow();
export const anonymousApiRoot = createApiBuilderFromCtpClient(anonymousClient).withProjectKey({
  projectKey: ClientApiData.projectKey
});

// создать корзину (обьект корзины содержит валюту и кастомер айди или аноним айди) эти поля могут переназначаться
export const createCart = async (cart: MyCartDraft): Promise<ClientResponse<Cart>> => {
  return await anonymousApiRoot
    .me()
    .carts()
    .post({
      body: cart
    })
    .execute();
};

export const getAllCarts = async (): Promise<ClientResponse<CartPagedQueryResponse>> => {
  return await apiRoot.carts().get().execute();
};

export const getCartWithId = async (id: string): Promise<ClientResponse<Cart>> => {
  return await apiRoot.carts().withId({ ID: id }).get().execute();
};

export const getCartWithCustomerId = async (customerId: string): Promise<ClientResponse<Cart>> => {
  return await apiRoot.carts().withCustomerId({ customerId }).get().execute();
};

export const updateCart = async (
  cartId: string,
  version: number,
  actions: CartUpdateAction[]
): Promise<ClientResponse<Cart>> => {
  return await apiRoot
    .carts()
    .withId({
      ID: cartId
    })
    .post({
      body: {
        version,
        actions
      }
    })
    .execute();
};

// for development
export const createDiscountCode = async (data: DiscountCodeDraft): Promise<ClientResponse<DiscountCode>> => {
  return await apiRoot
    .discountCodes()
    .post({
      body: data
    })
    .execute();
};

export const queryDiscounts = async (): Promise<ClientResponse<DiscountCodePagedQueryResponse>> => {
  return await apiRoot.discountCodes().get().execute();
};

// for development
export const updateCartDiscount = async (
  id: string,
  version: number,
  actions: CartDiscountUpdateAction[]
): Promise<ClientResponse<CartDiscount>> => {
  return await apiRoot
    .cartDiscounts()
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
