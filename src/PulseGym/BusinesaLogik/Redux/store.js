import { configureStore } from "@reduxjs/toolkit";
import gymReducer from "./GymSlice";
import feedbackReducer from "./FeedbackSlice";
import photoPopUpReducer from "./PhotoPopUpSlice";

export const store = configureStore({
  reducer: {
    gymReducer,
    feedbackReducer,
    photoPopUpReducer,
  },
});
