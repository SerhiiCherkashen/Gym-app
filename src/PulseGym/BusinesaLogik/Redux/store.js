import { configureStore } from "@reduxjs/toolkit";
import gymReducer from "./GymSlice";
import feedbackReducer from "./FeedbackSlice";

export const store = configureStore({
  reducer: {
    gymReducer,
    feedbackReducer,
  },
});
