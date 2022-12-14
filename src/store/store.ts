import { configureStore } from "@reduxjs/toolkit";
import weather from "./reducers/weatherReducer";
import message from "./reducers/messageReducer";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    weather,
    message,
  },
});
