import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from '../features/anecdoteSlice';

export const store = configureStore({
  reducer: anecdoteReducer,
});
