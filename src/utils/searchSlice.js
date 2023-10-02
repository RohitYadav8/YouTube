import { createSlice } from "@reduxjs/toolkit";

// our state will store initially empty values
// Then it will have
// {
//   i,
//   ip,
//   ipho,
//   iphpne,
// }

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResult } = searchSlice.actions;

export default searchSlice.reducer;
