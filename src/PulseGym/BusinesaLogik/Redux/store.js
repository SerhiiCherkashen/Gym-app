import { configureStore } from "@reduxjs/toolkit";
import gymReducer from "./GymSlice";

export const store = configureStore({
  reducer: {
    gymReducer,
  },
});
