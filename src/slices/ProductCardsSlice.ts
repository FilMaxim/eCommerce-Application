import { createSlice } from '@reduxjs/toolkit';
import type { InitialProductsStateInterace } from '../utils/types';

const initialState: InitialProductsStateInterace = {
  cards: [],
  extremums: [0, 0]
};

const productCardsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.cards = payload;
    },
    setExtremums: (state, { payload }) => {
      state.extremums = payload;
    }
  }
});

export const { setProducts, setExtremums } = productCardsSlice.actions;
export const productCardsReducer = productCardsSlice.reducer;
