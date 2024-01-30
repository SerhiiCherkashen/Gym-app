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

  return (
    <div className={imagesScroll.imagesScroll}>
      {/* <h1>imagesScroll</h1> */}
      <button onClick={() => dispatch(leftClick())}> {"<"} </button>
      <img src={arrayImageScroll[0]} />
      <img src={arrayImageScroll[1]} />
      <img src={arrayImageScroll[2]} />
      <img src={arrayImageScroll[3]} />
      <button onClick={() => dispatch(rightClick())}> {">"} </button>
    </div>
  );
};

export default ImagesScroll;
