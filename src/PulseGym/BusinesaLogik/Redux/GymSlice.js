import { createSlice } from "@reduxjs/toolkit";
import { stateConst } from "../State/StateConst";
import { stateRedux } from "../State/StateRedux";

const state = stateRedux;
const gymSlice = createSlice({
  name: "gym",
  initialState: state,
  reducers: {
    chooseGym: (state, actions) => {
      console.log("chooseGym");
      const id = actions.payload;
      let index = stateConst.gyms.findIndex((element) => element.id === id);

      state.currentGym = stateConst.gyms[index];

      state.currentPriceList = [];
      state.currentGym.services.forEach((element) => {
        let serviceIndex = stateConst.priceList.findIndex(
          (item) => item.searchId === element
        );
        if (serviceIndex > -1) {
          state.currentPriceList.push(stateConst.priceList[serviceIndex]);
        }
      });
      state.currentCoaches = [];
      state.currentGym.coaches.forEach((element) => {
        let coachesIndex = stateConst.coaches.findIndex(
          (item) => item.name === element
        );
        if (coachesIndex > -1) {
          state.currentCoaches.push(stateConst.coaches[coachesIndex]);
        }
      });
    },
    switchSchedule: (state) => {
      state.schedulePage = !state.schedulePage;
    },

    leftClick: (state) => {
      let countImages = 4;
      const length = stateConst.stateImage.scrgym.length;
      state.arrayImageScroll = [];

      for (let i = 1; i <= countImages; i++) {
        if (state.startSrcImg + i - countImages + 1 === -1) {
          state.arrayImageScroll.push(
            stateConst.stateImage.scrgym[
              stateConst.stateImage.scrgym.length - 1
            ]
          );
        } else if (state.startSrcImg + i - countImages + 1 === -2) {
          state.arrayImageScroll.push(
            stateConst.stateImage.scrgym[
              stateConst.stateImage.scrgym.length - 2
            ]
          );
        } else if (state.startSrcImg + i - countImages + 1 === -3) {
          state.arrayImageScroll.push(
            stateConst.stateImage.scrgym[
              stateConst.stateImage.scrgym.length - 3
            ]
          );
        } else if (state.startSrcImg + i - countImages + 1 === -4) {
          state.arrayImageScroll.push(
            stateConst.stateImage.scrgym[
              stateConst.stateImage.scrgym.length - 4
            ]
          );
        } else {
          state.arrayImageScroll.push(
            stateConst.stateImage.scrgym[
              state.startSrcImg + i - countImages + 1
            ]
          );
        }
      }
      if (state.startSrcImg === -2) {
        // const
        state.startSrcImg = length - 3; // ? countImages - 1
      } else {
        state.startSrcImg -= 1;
      }
    },
    rightClick: (state, actions) => {
      // let imageArray = actions.payload;
      // console.log(">>>>>", imageArray.length); // 16
      let countImages = 4;
      const length = stateConst.stateImage.scrgym.length; // work !!!
      // const length = imageArray.length;
      state.arrayImageScroll = [];

      for (let i = 1; i <= countImages; i++) {
        // let sostoanie = false;
        // for (let y = 0; y < i; y++) {
        //   if (state.startSrcImg + i === length) {
        //     state.arrayImageScroll.push(stateConst.stateImage.scrgym[y]); // 0 / 1 / 2/ 3 / 4
        //   }
        // }
        // if (sostoanie === false) {
        //   state.arrayImageScroll.push(
        //     stateConst.stateImage.scrgym[state.startSrcImg + i]
        //   );
        // }

        //
        //
        //
        //// Work version !!!
        if (state.startSrcImg + i === length) {
          state.arrayImageScroll.push(stateConst.stateImage.scrgym[0]);
        }
        if (state.startSrcImg + i === length) {
          state.arrayImageScroll.push(stateConst.stateImage.scrgym[1]);
        }
        if (state.startSrcImg + i === length) {
          state.arrayImageScroll.push(stateConst.stateImage.scrgym[2]);
        }
        if (state.startSrcImg + i === length) {
          state.arrayImageScroll.push(stateConst.stateImage.scrgym[3]);
        } else {
          state.arrayImageScroll.push(
            stateConst.stateImage.scrgym[state.startSrcImg + i]
          );
        }
        //
        // if (state.startSrcImg + i === length) {
        //   state.arrayImageScroll.push(imageArray[0]);
        // }
        // if (state.startSrcImg + i === length) {
        //   state.arrayImageScroll.push(imageArray[1]);
        // }
        // if (state.startSrcImg + i === length) {
        //   state.arrayImageScroll.push(imageArray[2]);
        // }
        // if (state.startSrcImg + i === length) {
        //   state.arrayImageScroll.push(imageArray[3]);
        // } else {
        //   state.arrayImageScroll.push(imageArray[state.startSrcImg + i]);
        // }
      }
      if (state.startSrcImg + 1 === length) {
        state.startSrcImg = 0;
      } else {
        state.startSrcImg += 1;
      }
    },
    openPopup: (state) => {
      console.log(" openPopup", state.popUp.isOpen);
      state.popUp.isOpen = true;
    },
    closePopup: (state) => {
      console.log(" closePopup");
      state.popUp.isOpen = false;
    },
    //
    openPhotoPopup: (state, actions) => {
      let index = actions.payload;
      console.log("slice", index);
      console.log("state.photoPopUp.isOpen : ", state.photoPopUp.isOpen);
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
      let index = state.photoPopUp.indexPhoto;
      if (index - 1 === -1) {
        state.photoPopUp.indexPhoto = state.currentGym.imageArray.length - 1;
      } else {
        state.photoPopUp.indexPhoto -= 1;
      }
    },
    rightPopUpButton: (state) => {
      console.log("slice");
      let index = state.photoPopUp.indexPhoto;
      if (index + 1 === state.currentGym.imageArray.length) {
        state.photoPopUp.indexPhoto = 0;
      } else {
        state.photoPopUp.indexPhoto += 1;
      }
    },
    blogClick: (state, actions) => {
      let index = actions.payload;
      state.blogIndex = index;
      console.log(index);
    },
  },
});

export const {
  chooseGym,
  switchSchedule,
  leftClick,
  rightClick,
  openPopup,
  closePopup,
  openPhotoPopup,
  closePhotoPopup,
  leftPopUpButton,
  rightPopUpButton,
  blogClick,
} = gymSlice.actions;
export default gymSlice.reducer;
