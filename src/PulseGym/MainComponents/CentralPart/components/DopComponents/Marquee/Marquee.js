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
          {/* <p className={marquee.marqueeText}>
            ---11111111--- ---11111111--- ---11111111--- ---11111111---
            ---11111111--- ---11111111--- ---11111111--- ---11111111---
            ---11111111--- ---11111111---
          </p>
          <p className={marquee.marqueeText}>
            ---2222222--- ---2222222--- ---2222222--- ---2222222---
            ---2222222--- ---2222222--- ---2222222--- ---2222222---
            ---2222222---
          </p> */}

          {/* PULSE GYM СЕТЬ СПОРТИВНЫХ КЛУБОВ В ХАРЬКОВЕ */}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
