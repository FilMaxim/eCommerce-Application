/* eslint-disable */
import { anonymousApiRoot } from '../apiRoot';
import { getCart } from './getCart';

export const addProductToCart = async (productId: string) => {
  const dataString = localStorage.getItem('rs-online-shop-anomimous');
  const { cartId } = dataString !== null && JSON.parse(dataString);
  const {
    body: { id, version }
  } = await getCart(cartId);

  return await anonymousApiRoot
    .carts()
    .withId({
      ID: id
    })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'addLineItem',
            productId,
            quantity: 1
          }
        ]
      }
    })
    .execute();
};
