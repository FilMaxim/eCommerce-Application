import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: Boolean(localStorage.getItem('customer')),
  customer: JSON.parse(localStorage.getItem('customer') ?? '{}')
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setLogged: (state, { payload }) => {
      state.isLogged = payload;
    },
    setCustomer: (state, { payload }) => {
      state.customer = payload;
    }
  }
});

export const { setLogged, setCustomer } = authSlice.actions;
export const authReducer = authSlice.reducer;
