import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: Boolean(localStorage.getItem('id'))
};

const authSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    setLogged: (state, { payload }) => {
      state.isLogged = payload;
    }
  }
});

export const { setLogged } = authSlice.actions;
export const authReducer = authSlice.reducer;
