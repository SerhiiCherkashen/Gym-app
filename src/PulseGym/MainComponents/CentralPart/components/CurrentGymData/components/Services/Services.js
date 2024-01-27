import React from "react";
import services from "./Services.module.css";

const Services = () => {
  return (
    <div className={services.services}>
      <div className={services.left}>Services</div>
      <div className={services.right}> Text</div>
    </div>
  );
};

export default Services;
