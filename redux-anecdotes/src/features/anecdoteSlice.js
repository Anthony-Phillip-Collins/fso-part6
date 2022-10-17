import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    vote: (state, action) => {
      state.find(({ id }) => id === action.payload).votes += 1;
    },
    create: (state, action) => {
      if (action.payload) {
        state.push(action.payload);
      }
    },
    setAll: (state, action) => {
      return action.payload;
    },
  },
});

export const { vote, create, setAll } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
