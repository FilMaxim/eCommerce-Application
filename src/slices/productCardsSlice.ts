import { createSlice } from '@reduxjs/toolkit';
import type { InitialProductsStateInterace } from '../utils/types';
import { normalizeData } from '../pages/catalogPage/utils/normalizeData';

const initialState: InitialProductsStateInterace = {
  cardsData: [],
  extremums: [0, 0],
  total: 0
};

const productCardsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      const normalisedData = normalizeData(payload);
      state.cardsData = normalisedData;
      state.total = payload.total;
    },
    setExtremums: (state, { payload }) => {
      state.extremums = payload;
    }
  }
});

export const { setProducts, setExtremums } = productCardsSlice.actions;
export const productCardsReducer = productCardsSlice.reducer;
