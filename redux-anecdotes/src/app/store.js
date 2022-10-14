import { configureStore } from '@reduxjs/toolkit';
import anecdotes from '../features/anecdoteSlice';
import notification from '../features/notificationSlice';
import filter from '../features/filterSlice';

export const store = configureStore({
  reducer: {
    anecdotes,
    notification,
    filter,
  },
});
