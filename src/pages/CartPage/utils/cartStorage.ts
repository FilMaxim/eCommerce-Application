import { type Cart } from '@commercetools/platform-sdk';

export const getCartFromLs = (): Cart | null => {
  return JSON.parse(localStorage.getItem('cart') ?? 'null');
};

export const setCartToLs = (cart: Cart): void => {
  localStorage.setItem('cart', JSON.stringify(cart));
};
