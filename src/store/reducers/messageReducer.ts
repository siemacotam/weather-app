import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface MessageState {
  message: string;
}

const initialState: MessageState = {
  message: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearMessage: () => initialState,
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;

export const selectCount = (state: RootState) => state.message;

export default messageSlice.reducer;
