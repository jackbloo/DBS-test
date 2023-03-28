import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      const newUserData = [action.payload,...state.userData]
      state.userData = newUserData
    },
  },
});

export const { addData } = dataSlice.actions;



export default dataSlice.reducer;
