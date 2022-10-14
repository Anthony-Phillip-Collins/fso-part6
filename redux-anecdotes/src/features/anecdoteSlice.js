import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

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
  },
});

export const { vote, create } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
