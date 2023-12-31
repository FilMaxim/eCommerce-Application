import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../helpers/api/apiRoot';
import { setCartToLs } from '../pages/CartPage/utils/cartStorage';
import { setCartData } from '../slices/cartSlice';
import type { RootState, AddToCartParams, UpdateItemQuantity } from '../utils/types';
import type { Cart, CartUpdateAction, LineItem } from '@commercetools/platform-sdk';

const enum UpdateCartActions {
  addLineItem = 'addLineItem',
  changeLineItemQuantity = 'changeLineItemQuantity',
  removeLineItem = 'removeLineItem',
  setCustomerId = 'setCustomerId',
  addDiscountCode = 'addDiscountCode'
}

export const useCart = () => {
  const cart = useSelector((state: { cart: RootState }) => state.cart.cart);
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer);
  const dispatch = useDispatch();

  const setCart = (cart: Cart) => {
    dispatch(setCartData(cart));

    if (customer === null) {
      setCartToLs(cart);
    }
  };

  const addToCart = async ({
    cartId,
    cartVersion,
    productId
  }: AddToCartParams): Promise<number | undefined> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.addLineItem,
        productId,
        quantity: 1
      }
    ]);
    setCart(updatedCart.body);
    return updatedCart.statusCode;
  };

  const updateQuantity = async ({
    cartId,
    cartVersion,
    lineItemId,
    quantity
  }: UpdateItemQuantity): Promise<void> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.changeLineItemQuantity,
        lineItemId,
        quantity
      }
    ]);
    setCart(updatedCart.body);
  };

  const removeItemFromCart = async (
    cartId: string,
    cartVersion: number,
    lineItemId: string,
    quantity: number
  ): Promise<void> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.removeLineItem,
        lineItemId,
        quantity
      }
    ]);
    setCart(updatedCart.body);
  };

  const mergeAnonymousCartAfterSignUp = async (
    cartId: string,
    cartVersion: number,
    customerId: string
  ): Promise<void> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.setCustomerId,
        customerId
      }
    ]);
    setCart(updatedCart.body);
  };

  const clearCart = async (cartId: string, cartVersion: number, itemsList: LineItem[]): Promise<void> => {
    const removeActions: CartUpdateAction[] = itemsList.map((item) => ({
      action: UpdateCartActions.removeLineItem,
      lineItemId: item.id,
      quantity: item.quantity
    }));

    const updatedCart = await updateCart(cartId, cartVersion, removeActions);
    setCart(updatedCart.body);
  };

  const applyDiscount = async (cartId: string, cartVersion: number, discountCode: string): Promise<void> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.addDiscountCode,
        code: discountCode
      }
    ]);

    setCart(updatedCart.body);
  };

  return {
    addToCart,
    updateQuantity,
    removeItemFromCart,
    mergeAnonymousCartAfterSignUp,
    applyDiscount,
    clearCart,
    cart
  };
};
