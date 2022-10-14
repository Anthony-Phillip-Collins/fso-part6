import { createSlice } from '@reduxjs/toolkit';

const initialState = { message: '' };

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notify: (state, action) => {
      state.message = action.payload;
    },
    clear: (state, action) => {
      state.message = '';
    },
  },
});

export const { notify, clear } = notificationSlice.actions;

export default notificationSlice.reducer;
