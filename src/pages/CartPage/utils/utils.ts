import type { LineItem } from '@commercetools/platform-sdk';

export const getInitialCartTotalPrice = (cartItemsList: LineItem[]) => {
  return cartItemsList.reduce((acc, item) => {
    return acc + item.price.value.centAmount * item.quantity;
  }, 0);
};
