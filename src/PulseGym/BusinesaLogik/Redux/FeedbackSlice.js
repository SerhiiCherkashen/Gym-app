import React, { useDeferredValue } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { stateConst } from "../State/StateConst";
import { stateRedux } from "../State/StateRedux";
import { stateFeedback } from "../State/StateFeedback";

const state = stateFeedback;
const feedbackSlice = createSlice({
  name: "feedback",
  initialState: state,
  reducers: {
    changeInput: (state, actions) => {
      let id = actions.payload.id;
      let e = actions.payload.value;
      if (id === "name") {
        state.feedbackValue.inputNameValue = e;
      } else if (id === "email") {
        state.feedbackValue.inputEmailValue = e;
      } else if (id === "text") {
        state.feedbackValue.inputTextValue = e;
      }
    },
    clickInput: (state, actions) => {
      let id = actions.payload;
      if (id === "name") {
        state.feedbackValue.inputNameValue = "";
      } else if (id === "email") {
        state.feedbackValue.inputEmailValue = "";
      } else if (id === "text") {
        state.feedbackValue.inputTextValue = "";
      }
    },
    clickSelect: (state, actions) => {
      let e = actions.payload;
      state.feedbackValue.address = e.target.value;
    },
    clickSend: (state) => {
      console.log("send");
      state.feedback.push({
        name: state.feedbackValue.inputNameValue,
        address: state.feedbackValue.address,
        text: state.feedbackValue.inputTextValue,
      });
      state.feedbackValue.inputNameValue = "Name";
      state.feedbackValue.inputEmailValue = "Email";
      state.feedbackValue.inputTextValue = "Text";
    },
  },
});

export const {
  changeName,
  changeEmail,
  changeText,
  changeInput,
  clickInput,
  clickSelect,
  clickSend,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
