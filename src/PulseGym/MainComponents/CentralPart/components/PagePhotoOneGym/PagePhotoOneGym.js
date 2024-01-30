import React from "react";
import pagePhotoOneGym from "./PagePhotoOneGym.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PagePhotoOneGym = (props) => {
  const { currentGym } = useSelector((state) => state.gymReducer);
  // console.log("PagePhotoOneGym props : ", Object.keys(props));
  // console.log("PagePhotoOneGym currentGym : ", Object.keys(currentGym));
  return (
    <div>
      <h1>PagePhotoOneGym</h1>
      <BlackLine
        leftContext={"PULSE GYM " + currentGym.peopleName}
        rightContext={<Link to="/photoPage">ALL Clubs</Link>}
      />
    </div>
  );
};

export default PagePhotoOneGym;
