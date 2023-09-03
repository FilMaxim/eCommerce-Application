import { createSlice } from '@reduxjs/toolkit';

interface CategoriesInitialState {
  categories: Array<{ name: string; id: string }>;
}

const initialState: CategoriesInitialState = {
  categories: []
};

const catagoriesSlice = createSlice({
  name: 'categoriesData',
  initialState,
  reducers: {
    setCategoriesData: (state, { payload }) => {
      state.categories = payload;
    }
  }
});

export const { setCategoriesData } = catagoriesSlice.actions;
export const categoriesReducer = catagoriesSlice.reducer;
