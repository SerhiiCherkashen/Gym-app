import React from "react";
import coaches from "./Couches.module.css";
import { useSelector } from "react-redux";

const Couches = () => {
  const { currentCoaches } = useSelector((state) => state.gymReducer);
  console.log("Couches : ", currentCoaches.length);
  return (
    <div className={coaches.coaches}>
      <div className={coaches.coachesText}>Couches</div>
      <div className={coaches.wrapDataCoaches}>
        {currentCoaches.map((element) => {
          return (
            <div className={coaches.wrapOneCoach}>
              <img src={element.image} />
              <div className={coaches.text}> {element.name}</div>
              <div className={coaches.text}> {element.tel}</div>
              <div className={coaches.text}> {element.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Couches;
