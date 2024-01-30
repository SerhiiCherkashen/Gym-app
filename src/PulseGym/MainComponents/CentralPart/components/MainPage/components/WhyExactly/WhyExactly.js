import React from "react";
import whyExactly from "./WhyExactly.module.css";
import { stateConst } from "../../../../../../BusinesaLogik/State/StateConst";
import { Link } from "react-router-dom";

const WhyExactly = () => {
  return (
    <div>
      <h1 className={whyExactly.whyExactly}>WhyExactly</h1>
      <div className={whyExactly.header}>
        <div className={whyExactly.bigText}>ПОЧЕМУ ИМЕННО PULSE GYM?</div>
        <Link to="/clubsPage">
          <div className={whyExactly.rightText}>ВЫБРАТЬ КЛУБ</div>
        </Link>
      </div>
      <div className={whyExactly.wrapMapElement}>
        {stateConst.whyExactly.map((element, index) => {
          return (
            <>
              <div>
                <img src={element.image} />
                <div className={whyExactly.text}>{element.text}</div>
              </div>
              {index !== 4 && (
                <div>
                  <img src={stateConst.stateImage.threeDots} />
                </div>
              )}
            </>
          );
        })}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default WhyExactly;
