import React from "react";
import marquee from "./Marquee.module.css";

const Marquee = () => {
  return (
    <div className={marquee.container}>
      <div className={marquee.marqueeContainer}>
        <div className={marquee.marqueeWrapper}>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
          <p className={marquee.marqueeText}>-- PULSE GYM---------</p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
