import React, { useDeferredValue } from "react";
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
    rightClick: (state) => {
      let countImages = 4;
      let arr = [11, 22, 33, 44];
      const length = stateConst.stateImage.scrgym.length;
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
  },
});

export const {
  chooseGym,
  switchSchedule,
  leftClick,
  rightClick,
  openPopup,
  closePopup,
} = gymSlice.actions;
export default gymSlice.reducer;
