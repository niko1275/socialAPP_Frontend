import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alerts',
  initialState: [],
  reducers: {
    showAlert: (state, action) => {
      return [...state, action.payload];
    },
    hideAlert: (state, action) => {
      return state.filter(alert => alert.id !== action.payload);
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;