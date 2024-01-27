import React from "react";
import cgd from "./CurrentGymData.module.css";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import MapTelAddressPhoto from "./components/MapTelAddressPhoto/MapTelAddressPhoto";
import Services from "./components/Services/Services";
import PriceList from "./components/PriceList/PriceList";
import Couches from "./components/Couches/Couches";

const CurrentGymData = () => {
  return (
    <div className={cgd.currentGymData}>
      <h1>CurrentGymData</h1>
      <BlackLine
        leftContext={"CurrentGymData"}
        rightContext={"list"}
        currentGymData={true}
      />
      <div className={cgd.content}>
        <MapTelAddressPhoto />
        <Services />
        <PriceList />
        <Couches />
      </div>
    </div>
  );
};

export default CurrentGymData;
