import { createSlice } from '@reduxjs/toolkit';
import { getTokensFromLs } from '../helpers/manageTokens';

const initialState = {
  isLogged: Boolean(getTokensFromLs().tokenFromLs)
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setLogged: (state, { payload }) => {
      state.isLogged = payload;
    }
  }
});

export const { setLogged } = authSlice.actions;
export const authReducer = authSlice.reducer;
