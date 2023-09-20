import { createSlice } from '@reduxjs/toolkit';
import type { LineItem, CentPrecisionMoney } from '@commercetools/platform-sdk';

export interface CartInitialstate {
  anonymousId: string | undefined;
  id: string;
  lineItems: LineItem[];
  version: number;
  totalLineItemQuantity: number | undefined;
  totalPrice: CentPrecisionMoney;
}

const cartData: CartInitialstate = {
  anonymousId: '',
  id: '',
  lineItems: [],
  version: 0,
  totalLineItemQuantity: 0,
  totalPrice: {
    type: 'centPrecision',
    currencyCode: '',
    centAmount: 0,
    fractionDigits: 0
  }
};

const initialState = {
  cartData
};

const cartSlice = createSlice({
  name: 'categoriesData',
  initialState,
  reducers: {
    setCartData: (state, { payload }) => {
      state.cartData = payload;
    }
  }
});

export const { setCartData } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
