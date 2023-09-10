import type { Cart, ClientResponse } from '@commercetools/platform-sdk';
import { anonymousApiRoot } from '../apiRoot';

export const anonymousAuth = async (): Promise<ClientResponse<Cart>> => {
  return await anonymousApiRoot
    .me()
    .carts()
    .post({
      body: {
        currency: 'EUR'
      }
    })
    .execute();
};
