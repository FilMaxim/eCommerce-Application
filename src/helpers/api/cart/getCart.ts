import type { Cart, ClientResponse } from '@commercetools/platform-sdk';
import { anonymousApiRoot } from '../apiRoot';

export const getCart = async (cartId: string): Promise<ClientResponse<Cart>> => {
  const data = await anonymousApiRoot
    .carts()
    .withId({
      ID: cartId
    })
    .get()
    .execute();

  console.log(data);
  return data;
};
