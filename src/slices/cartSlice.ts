import { type Cart } from '@commercetools/platform-sdk';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { cart: Cart | null } = {
  cart: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload;
    }
  }
});

export const { setCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
