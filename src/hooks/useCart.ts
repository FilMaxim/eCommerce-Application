import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../helpers/api/apiRoot';
import { setCartToLs } from '../pages/CartPage/utils/cartStorage';
import { setCart } from '../slices/cartSlice';
import { type RootState, type AddToCartParams } from '../utils/types';

export const useCart = () => {
  const cart = useSelector((state: { cart: RootState }) => state.cart.cart);
  const customer = useSelector((state: { authData: RootState }) => state.authData.customer);
  const dispatch = useDispatch();

  const addToCart = async ({ cartId, cartVersion, productId, centAmount, quantity = 1 }: AddToCartParams) => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: 'addLineItem',
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

  const updateQuantity = async (
    cartId: string,
    cartVersion: number,
    lineItemId: string,
    quantity: number,
    centAmount: number
  ) => {
    const updatedCart = await updateCart(cartId, cartVersion, [
      {
        action: 'changeLineItemQuantity',
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

  const removeItemFromCart = async (lineItemId: string, quantity: number = 1) => {
    if (cart === null) return;
    const updatedCart = await updateCart(cart.id, cart.version, [
      {
        action: 'removeLineItem',
        lineItemId,
        quantity
      }
    ]);
    dispatch(setCart(updatedCart.body));

    if (customer === null) {
      setCartToLs(updatedCart.body);
    }
  };

  return { addToCart, updateQuantity, removeItemFromCart, cart };
};
