import { type Cart } from '@commercetools/platform-sdk';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { cart: Cart | null } = {
  cart: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, { payload }) => {
      state.cart = payload;
    }
  }
});

export const { setCartData } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
