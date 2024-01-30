import React from "react";
import services from "./Services.module.css";
import { useSelector } from "react-redux";
import { stateConst } from "../../../../../../BusinesaLogik/State/StateConst";

const Services = () => {
  const { currentGym } = useSelector((state) => state.gymReducer);
  const { currentPriceList } = useSelector((state) => state.gymReducer);

  return (
    <div className={services.services}>
      <div className={services.left}>Services</div>
      <div className={services.right}>
        {Array.isArray(currentGym.services) &&
          currentGym.services.map((element, index) => {
            return (
              <div
                key={index + Date.now() + Math.ceil(Math.random() * 100)}
                className={services.wrapOneService}>
                <img src={stateConst.stateImage.checkMark} />
                <span>{element}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Services;
