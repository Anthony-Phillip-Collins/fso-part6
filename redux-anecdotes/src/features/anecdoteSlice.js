import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const anecdotesAtStart = [];

const anecdoteObj = (content) => ({
  content,
  id: uuidv4(),
  votes: 0,
});

const initialState = anecdotesAtStart.map((str) => anecdoteObj(str));

export const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    vote: (state, action) => {
      state.find(({ id }) => id === action.payload).votes += 1;
    },
    create: (state, action) => {
      if (action.payload) {
        state.push(anecdoteObj(action.payload));
      }
    },
    setAll: (state, action) => {
      return action.payload;
    },
  },
});

export const { vote, create, setAll } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
