import { createSlice } from "@reduxjs/toolkit";
import { stateConst } from "../State/StateConst";
import { stateRedux } from "../State/StateRedux";
import { statePhotoPopUp } from "../State/StatePhotoPopUp";

const state = stateRedux;
const photoPopUpSlice = createSlice({
  name: "photoPopUp",
  initialState: state,
  reducers: {
    openPhotoPopup: (state, actions) => {
      let index = actions.payload;
      console.log("slice", index);
      console.log(
        "state.photoPopUp.isOpen : ",
        state.photoPopUp.isOpen,
        state.photoPopUp.indexPhoto,
        state.name
      );
      state.photoPopUp.indexPhoto = index;
      state.photoPopUp.isOpen = true;
    },
    closePhotoPopup: (state) => {
      console.log("slice");
      state.photoPopUp.isOpen = false;
    },
    leftPopUpButton: (state) => {
      console.log("slice");
      console.log("<");
      console.log(" Object.keys(state) : ", Object.keys(state));
      console.log(
        "  state.currentGym.imageArray.length : ",
        Array.isArray(state.currentGym.imageArray)
      );
      let index = state.photoPopUp.indexPhoto;
      if (index - 1 === -1) {
        state.photoPopUp.indexPhoto = state.currentGym.imageArray.length - 1;
      } else {
        state.photoPopUp.indexPhoto -= 1;
      }
    },
    rightPopUpButton: (state) => {
      console.log("slice > ");
      console.log(" Object.keys(state) : ", Object.keys(state));
      console.log(
        " Object.keys(state.currentGym) : ",
        Object.keys(state.currentGym)
      );
      console.log(
        "  state.currentGym.imageArray.length : ",
        Array.isArray(state.currentGym.imageArray)
      );
      let index = state.photoPopUp.indexPhoto;
      if (index + 1 === state.currentGym.imageArray.length) {
        state.photoPopUp.indexPhoto = 0;
      } else {
        state.photoPopUp.indexPhoto += 1;
      }
    },
  },
});

export const {
  //   openPhotoPopup,
  //   closePhotoPopup,
  //   leftPopUpButton,
  //   rightPopUpButton,
} = photoPopUpSlice.actions;
export default photoPopUpSlice.reducer;
