import { createSlice } from "@reduxjs/toolkit";
import { SPLICE_Value } from "./constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addMessage: (state, action) => {
      //remove 1 message after every 10 messages
      state.messages.splice(SPLICE_Value, 1);
      //unshift - to push from first in array
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
