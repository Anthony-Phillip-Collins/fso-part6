import { createSlice } from '@reduxjs/toolkit';

const initialState = { message: '' };

export const notificationSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    notify: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { notify } = notificationSlice.actions;

export default notificationSlice.reducer;
