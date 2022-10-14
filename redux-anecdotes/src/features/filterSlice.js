import { createSlice } from '@reduxjs/toolkit';

const initialState = { text: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;

export default filterSlice.reducer;
