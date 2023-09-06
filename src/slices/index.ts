import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { productCardsReducer } from './productCardsSlice';
import { categoriesReducer } from './categoriesSlice';

export const store = configureStore({
  reducer: {
    authData: authReducer,
    productsData: productCardsReducer,
    categoriesData: categoriesReducer
  }
});
