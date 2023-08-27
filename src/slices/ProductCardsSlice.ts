import { createSlice } from '@reduxjs/toolkit';
import type { InitialProductsStateInterace } from '../utils/types';

const initialState: InitialProductsStateInterace = {
  cards: []
};

const productCardsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    setProductCard: (state, { payload }) => {
      state.cards = payload;
    }
  }
});

export const { setProductCard } = productCardsSlice.actions;
export const productCardsReducer = productCardsSlice.reducer;
