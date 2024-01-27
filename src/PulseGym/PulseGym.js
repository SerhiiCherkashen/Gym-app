import React from "react";
import pulseG from "./PulseGym.module.css";
import Header from "./MainComponents/Header/Header";
import CentralPart from "./MainComponents/CentralPart/CentralPart";
import Footer from "./MainComponents/Footer/Footer";

const PulseGym = () => {
  return (
    <div className={pulseG.pulseGym}>
      <Header />
      <CentralPart />
      <Footer />
    </div>
  );
};

export default PulseGym;
