/* eslint-disable */
import { createCart } from './createCart';

export const setCart = async (): Promise<void> => {
  const dataString = localStorage.getItem('rs-online-shop-anomimous');
  const cartData = dataString !== null ? dataString : JSON.stringify(await createCart());

  localStorage.setItem('rs-online-shop-anomimous', cartData);
};
