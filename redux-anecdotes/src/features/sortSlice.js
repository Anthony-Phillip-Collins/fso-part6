import { createSlice } from '@reduxjs/toolkit';

export const SortTypes = Object.freeze({
  NONE: null,
  VOTES: 'VOTES',
});

const initialState = SortTypes.VOTES;

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sort(state, action) {
      state = action.payload;
    },
  },
});

export const { sort } = sortSlice;

export default sortSlice.reducer;
