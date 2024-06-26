import { createSlice } from "@reduxjs/toolkit";

const seachSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      //   state = [...action.payload, ...state];
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = seachSlice.actions;

export default seachSlice.reducer;
