// import type { CartsId } from '../../../utils/types';
import { anonymousAuth } from './anonymousAuth';

interface CartsId {
  cartId: string;
}

export const createCart = async (): Promise<CartsId | undefined> => {
  try {
    const {
      statusCode,
      body: { id }
    } = await anonymousAuth();

    if (statusCode === 201) {
      const cartsData = {
        cartId: id
      };
      return cartsData;
    }
  } catch (error) {
    console.error(error);
  }
};
