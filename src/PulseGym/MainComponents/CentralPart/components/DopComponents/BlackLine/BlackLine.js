import React from "react";
import blackLine from "./BlackLine.module.css";
import { useSelector } from "react-redux";

const BlackLine = (props) => {
  const currentGym = useSelector((state) => state.gymReducer.currentGym);
  // console.log("currentGym : ", currentGym);
  // console.log("BlackLine props : ", props);
  return (
    <div className={blackLine.blackLine}>
      <div
        className={
          !props.currentGymData
            ? `${blackLine.modeMainLinks} ${blackLine.general}`
            : `${blackLine.currentGymData} ${blackLine.general}`
        }>
        {!props.currentGymData ? (
          <>
            <div className={blackLine.leftContext}>{props.leftContext}</div>
            <div className={blackLine.rightContext}>{props.rightContext}</div>
          </>
        ) : (
          <>
            <div className={blackLine.leftContext}>{currentGym.peopleName}</div>
            <div className={blackLine.rightContext}>{currentGym.address}</div>
          </>
        )}
      </div>
      <div className={blackLine.orangeLine}></div>
    </div>
  );
};

export default BlackLine;
