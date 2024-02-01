import React from "react";
import coaches from "./Couches.module.css";
import { useSelector } from "react-redux";

const Couches = () => {
  const { currentCoaches } = useSelector((state) => state.gymReducer);
  // console.log("Couches.js : ", currentCoaches.length);
  return (
    <div className={coaches.coaches}>
      <div className={coaches.coachesText}>Couches</div>
      <div className={coaches.wrapDataCoaches}>
        {currentCoaches.map((element, index) => {
          return (
            <div
              key={index + Date.now() + Math.ceil(Math.random() * 100)}
              className={coaches.wrapOneCoach}>
              <img src={element.image} />
              <div className={coaches.text}> {element.name}</div>
              <div className={`${coaches.text} ${coaches.description}`}>
                {element.description}
              </div>
              <div className={coaches.text}> {element.tel}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Couches;
