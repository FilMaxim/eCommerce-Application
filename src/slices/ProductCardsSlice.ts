import { createSlice } from '@reduxjs/toolkit';
import type { InitialProductsStateInterace } from '../utils/types';

const initialState: InitialProductsStateInterace = {
  cards: [],
  extremums: []
};

const productCardsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    setProductsData: (state, { payload }) => {
      state.cards = payload;
    },
    setExtremums: (state, { payload }) => {
      state.extremums = payload;
    }
  }
});

export const { setProductsData, setExtremums } = productCardsSlice.actions;
export const productCardsReducer = productCardsSlice.reducer;
