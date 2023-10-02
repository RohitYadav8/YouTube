import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    //create actions
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

//Export action
export const { toggleMenu, closeMenu } = sideBarSlice.actions;
//Export Reducer
export default sideBarSlice.reducer;
