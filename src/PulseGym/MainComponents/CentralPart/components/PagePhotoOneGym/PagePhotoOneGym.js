import React from "react";
import pPhOG from "./PagePhotoOneGym.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PhotoPopUpWindow from "./components/PhotoPopUpWindow/PhotoPopUpWindow";
import { openPhotoPopup } from "../../../../BusinesaLogik/Redux/GymSlice";
// import { openPhotoPopup } from "../../../../BusinesaLogik/Redux/PhotoPopUpSlice";

const PagePhotoOneGym = () => {
  const { currentGym } = useSelector((state) => state.gymReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>PagePhotoOneGym</h1>
      <BlackLine
        leftContext={"PULSE GYM " + currentGym.peopleName}
        rightContext={<Link to="/photoPage">ALL Clubs</Link>}
      />
      <div className={pPhOG.wrapMapPhoto}>
        {currentGym.imageArray.map((element, index) => {
          return (
            <div className={pPhOG.hover}>
              <img
                index={index}
                src={element}
                onClick={() => dispatch(openPhotoPopup(index))}
              />
              <PhotoPopUpWindow />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PagePhotoOneGym; // 38  ? ? ?
