import React from "react";
import mainP from "./MainPage.module.css";
import MainBlackLine from "../DopComponents/MainBlackLine/MainBlackLine";
import ImagesScroll from "../DopComponents/ImagesScroll/ImagesScroll";
import MapComponent from "../DopComponents/MapComponent/MapComponent";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";
import WhyExactly from "./components/WhyExactly/WhyExactly";
import Marquee from "../DopComponents/Marquee/Marquee";

const MainPage = () => {
  return (
    <div>
      {/* <h1 className={mainP.text}>MainPage</h1> */}
      <MainBlackLine />
      <div className={mainP.container}>
        <div>
          <ImagesScroll />
        </div>
        <Marquee />
        <div className={mainP.map}>
          <MapComponent
            arrayCoordinates={[
              stateConst.gyms[0].coordinates,
              stateConst.gyms[1].coordinates,
              stateConst.gyms[3].coordinates,
              stateConst.gyms[4].coordinates,
              stateConst.gyms[5].coordinates,
              stateConst.gyms[6].coordinates,
              stateConst.gyms[7].coordinates,
              stateConst.gyms[8].coordinates,
              stateConst.gyms[9].coordinates,
              stateConst.gyms[10].coordinates,
              stateConst.gyms[11].coordinates,
              stateConst.gyms[12].coordinates,
              stateConst.gyms[13].coordinates,
              stateConst.gyms[14].coordinates,
              stateConst.gyms[15].coordinates,
            ]}
            center={stateConst.gyms[0].coordinates}
            zoom={11}
            // borderRadius={"50px"}
          />
        </div>
        <WhyExactly />
        <div>
          <ImagesScroll />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
