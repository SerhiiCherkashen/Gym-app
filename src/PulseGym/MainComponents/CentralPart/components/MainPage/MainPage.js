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
      <h1 className={mainP.text}>MainPage</h1>
      <MainBlackLine />
      <div>
        <div>
          <ImagesScroll />
        </div>
      </div>
      <div className={mainP.map}>
        <MapComponent
          arrayCoordinates={[stateConst.gyms[0].coordinates]}
          center={stateConst.gyms[0].coordinates}
          zoom={12}
          // borderRadius={"50px"}
        />
      </div>
      <WhyExactly />
      <div>
        <ImagesScroll />
      </div>
    </div>
  );
};

export default MainPage;
