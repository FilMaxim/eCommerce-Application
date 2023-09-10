import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../helpers/api/apiRoot';
import { setCartToLs } from '../pages/CartPage/utils/cartStorage';
import { setCart } from '../slices/cartSlice';
import type { RootState, AddToCartParams, UpdateItemQuantity } from '../utils/types';

const enum UpdateCartActions {
  addLineItem = 'addLineItem',
  changeLineItemQuantity = 'changeLineItemQuantity',
  removeLineItem = 'removeLineItem',
  setCustomerId = 'setCustomerId'
}

export const useCart = () => {
  const cart = useSelector((state: { cart: RootState }) => state.cart.cart);
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer);
  const dispatch = useDispatch();

  const addToCart = async ({ cartId, cartVersion, productId, centAmount, quantity = 1 }: AddToCartParams): Promise<void> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.addLineItem,
        productId,
        quantity,
        externalPrice: {
          currencyCode: 'EUR',
          centAmount
        }
      }
    ]);
    dispatch(setCart(updatedCart.body));

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
  };

  const updateQuantity = async ({
    cartId,
    cartVersion,
    lineItemId,
    quantity,
    centAmount
  }: UpdateItemQuantity): Promise<void> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.changeLineItemQuantity,
        lineItemId,
        quantity,
        externalPrice: {
          currencyCode: 'EUR',
          centAmount
        }
      }
    ]);
    dispatch(setCart(updatedCart.body));

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
  };

  const removeItemFromCart = async (cartId: string, cartVersion: number, lineItemId: string, quantity: number): Promise<void> => {
    if (cart === null) return;
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.removeLineItem,
        lineItemId,
        quantity
      }
    ]);
    dispatch(setCart(updatedCart.body));

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
  };

  const mergeAnonymousCartAfterSignUp = async (cartId: string, cartVersion: number, customerId: string): Promise<void> => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: UpdateCartActions.setCustomerId,
        customerId
      }
    ]);
    dispatch(setCart(updatedCart.body));

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
  };

  return { addToCart, updateQuantity, removeItemFromCart, mergeAnonymousCartAfterSignUp, cart };
};
