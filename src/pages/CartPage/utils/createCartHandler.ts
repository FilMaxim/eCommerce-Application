import { type Cart } from '@commercetools/platform-sdk';
import { createCart } from '../../../helpers/api/apiRoot';

export const createCartHandler = async (customerId?: string): Promise<Cart> => {
  if (customerId !== undefined) {
    const cartDraft = { customerId, currency: 'EUR' };
    return (await createCart(cartDraft)).body;
  }
  return (await createCart({ currency: 'EUR' })).body;
};
