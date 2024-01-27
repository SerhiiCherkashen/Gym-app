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
      const id = actions.payload;
      let index = stateConst.gyms.findIndex((element) => element.id === id);
      console.log("TRUE", id);
      console.log("index", index);
      state.currentGym = stateConst.gyms[index];
      //

      //
      state.currentPriceList = [];
      state.currentGym.services.forEach((element) => {
        console.log("element : ", element);
        let serviceIndex = stateConst.priceList.findIndex(
          (item) => item.searchId === element
        );
        if (serviceIndex > -1) {
          state.currentPriceList.push(stateConst.priceList[serviceIndex]);
        }
      });
      //

      // console.log("  stateConst.coaches.length: ", stateConst.coaches.length);
      // console.log(" Object.keys(stateConst) : ", Object.keys(stateConst));

      //
      state.currentCoaches = [];
      state.currentGym.coaches.forEach((element) => {
        console.log("element : ", element);
        let coachesIndex = stateConst.coaches.findIndex(
          (item) => item.name === element
        );
        if (coachesIndex > -1) {
          state.currentCoaches.push(stateConst.coaches[coachesIndex]);
        }
      });
    },
  },
});

export const { chooseGym } = gymSlice.actions;
export default gymSlice.reducer;
