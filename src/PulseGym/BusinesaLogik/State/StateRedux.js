import { stateConst } from "./StateConst";

export const stateRedux = {
  name: "redux",
  currentGym: {},
  currentPriceList: [],
  currentCoaches: [],
  schedulePage: false,
  startSrcImg: 0,
  arrayImageScroll: [
    stateConst.stateImage.scrgym[0],
    stateConst.stateImage.scrgym[1],
    stateConst.stateImage.scrgym[2],
    stateConst.stateImage.scrgym[3],
    stateConst.stateImage.scrgym[4],
    stateConst.stateImage.scrgym[5],
    stateConst.stateImage.scrgym[6],
    stateConst.stateImage.scrgym[7],
  ],
  popUp: {
    isOpen: false,
  },
  photoPopUp: {
    isOpen: false,
    indexPhoto: 0,
  },
  blogIndex: 0,
};
