import React from "react";
import imagesScroll from "./ImagesScroll.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../BusinesaLogik/State/StateConst";
import {
  leftClick,
  rightClick,
} from "../../../../../BusinesaLogik/Redux/GymSlice";

const ImagesScroll = (props) => {
  const dispatch = useDispatch();
  const { currentGym, arrayImageScroll } = useSelector(
    (state) => state.gymReducer
  );

  // let imageArray;
  // props.imageArray
  //   ? (imageArray = props.imageArray)
  //   : (imageArray = arrayImageScroll);

  // stateConst.stateImage.scrgym[0] = imageArray[0],
  // stateConst.stateImage.scrgym[1] = imageArray[1],
  // stateConst.stateImage.scrgym[2] = imageArray[2],
  // stateConst.stateImage.scrgym[3] = imageArray[3],

  return (
    <div className={imagesScroll.imagesScroll}>
      <button onClick={() => dispatch(leftClick())}>{"<"}</button>
      <img src={arrayImageScroll[0]} />
      <img src={arrayImageScroll[1]} />
      <img src={arrayImageScroll[2]} />
      <img src={arrayImageScroll[3]} />
      {/* <img src={stateConst.stateImage.scrgym[0]} />
      <img src={stateConst.stateImage.scrgym[1]} />
      <img src={stateConst.stateImage.scrgym[2]} />
      <img src={stateConst.stateImage.scrgym[3]} /> */}
      <button onClick={() => dispatch(rightClick())}> {">"} </button>
    </div>
  );
};

export default ImagesScroll;
