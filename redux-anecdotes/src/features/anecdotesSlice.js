import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../app/services/anecdote';

const initialState = [];

export const fetchAllAnecdotes = createAsyncThunk(
  'anecdotes/fetchAll',
  async (arg, thunkAPI) => {
    return await anecdoteService.getAll();
  }
);

export const createAnecdote = createAsyncThunk(
  'anecdotes/create',
  async ({ content }, thunkAPI) => {
    return await anecdoteService.create({ content });
  }
);

export const voteAnecdote = createAsyncThunk(
  'anecdotes/vote',
  async (id, thunkAPI) => {
    return await anecdoteService.upvote(id);
  }
);

export const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    vote: (state, action) => {
      state.find(({ id }) => id === action.payload).votes += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllAnecdotes.pending, (state, action) => {
      console.log('fetchAllAnecdotes.pending');
    });
    builder.addCase(fetchAllAnecdotes.fulfilled, (state, action) => {
      console.log('fetchAllAnecdotes.fulfilled');
      return action.payload;
    });
    builder.addCase(fetchAllAnecdotes.rejected, (state, action) => {
      console.log('fetchAllAnecdotes.rejected');
    });

    builder.addCase(createAnecdote.pending, (state, action) => {
      console.log('createAnecdote.pending');
    });
    builder.addCase(createAnecdote.fulfilled, (state, action) => {
      console.log('createAnecdote.fulfilled');
      state.push(action.payload);
    });
    builder.addCase(createAnecdote.rejected, (state, action) => {
      console.log('createAnecdote.rejected');
    });

    builder.addCase(voteAnecdote.pending, (state, action) => {
      console.log('voteAnecdote.pending');
    });
    builder.addCase(voteAnecdote.fulfilled, (state, action) => {
      console.log('voteAnecdote.fulfilled');
      state.find(({ id }) => id === action.payload.id).votes =
        action.payload.votes;
    });
    builder.addCase(voteAnecdote.rejected, (state, action) => {
      console.log('voteAnecdote.rejected');
    });
  },
});

export const { vote, create, setAll } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
