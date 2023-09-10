import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { productCardsReducer } from './ProductCardsSlice';
import { categoriesReducer } from './categoriesSlice';
import { cartReducer } from './cartSlice';

export const store = configureStore({
  reducer: {
    authData: authReducer,
    productsData: productCardsReducer,
    categoriesData: categoriesReducer,
    cart: cartReducer
  }
});
