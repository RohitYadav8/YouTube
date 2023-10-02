import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sideBarSlice from "./sideBarSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    //Adding slice to store
    sidebar: sideBarSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
