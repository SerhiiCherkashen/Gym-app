import React from "react";
import ppp from "./PhotoPopUpWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  closePhotoPopup,
  leftPopUpButton,
  rightPopUpButton,
} from "../../../../../../BusinesaLogik/Redux/GymSlice";

const PhotoPopUpWindow = () => {
  const dispatch = useDispatch();
  const { photoPopUp, currentGym } = useSelector((state) => state.gymReducer);
  // console.log(" PhotoPopUpWindow photoPopUp.isOpen : ", photoPopUp.isOpen);
  return (
    // <div className={`${ppp.popup} ${ppp.open}`}>
    <div className={`${ppp.popup} ${photoPopUp.isOpen ? ppp.open : ""}`}>
      <div className={ppp.popupContent}>
        <span className={ppp.close} onClick={() => dispatch(closePhotoPopup())}>
          &times;
        </span>
        <div className={ppp.wrapPopUp}>
          <button onClick={() => dispatch(leftPopUpButton())}>{"<"}</button>
          <img src={currentGym.imageArray[photoPopUp.indexPhoto]} />
          <button onClick={() => dispatch(rightPopUpButton())}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoPopUpWindow;
