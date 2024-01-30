import React from "react";
import mainP from "./MainPage.module.css";
import MainBlackLine from "../DopComponents/MainBlackLine/MainBlackLine";
import ImagesScroll from "../DopComponents/ImagesScroll/ImagesScroll";
import MapComponent from "../DopComponents/MapComponent/MapComponent";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";
import WhyExactly from "./components/WhyExactly/WhyExactly";

const MainPage = () => {
  return (
    <div>
      {/* <h1 className={mainP.text}>MainPage</h1> */}
      <MainBlackLine />
      <div className={mainP.container}>
        <div>
          <div>
            <ImagesScroll />
          </div>
        </div>
        <div className={mainP.map}>
          <MapComponent
            arrayCoordinates={[
              stateConst.gyms[0].coordinates,
              stateConst.gyms[1].coordinates,
              stateConst.gyms[2].coordinates,
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
