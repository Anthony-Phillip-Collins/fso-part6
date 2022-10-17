import { configureStore } from '@reduxjs/toolkit';
import anecdotes from '../features/anecdotesSlice';
import notification from '../features/notificationSlice';
import filter from '../features/filterSlice';
import sort from '../features/sortSlice';

export const store = configureStore({
  reducer: {
    anecdotes,
    notification,
    filter,
    sort,
  },
});
