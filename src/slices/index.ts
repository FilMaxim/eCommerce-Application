import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { productCardsReducer } from './ProductCardsSlice';

export const store = configureStore({
  reducer: {
    authData: authReducer,
    productsData: productCardsReducer
  }
});
