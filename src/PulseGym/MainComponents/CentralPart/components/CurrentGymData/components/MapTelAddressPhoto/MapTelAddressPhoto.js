import React from "react";
import mTAP from "./MapTelAddressPhoto.module.css";
import { useSelector } from "react-redux";
import { stateConst } from "../../../../../../BusinesaLogik/State/StateConst";

const MapTelAddressPhoto = () => {
  const currentGym = useSelector((state) => state.gymReducer.currentGym);
  return (
    <div>
      <h1>MapTelAddressPhoto</h1>
      <div className={mTAP.wrapMapText}>
        <div>
          <h1>MAP</h1>
        </div>
        <div className={mTAP.wrapColumn}>
          <div className={mTAP.wrapImgText}>
            <img src={stateConst.stateImage.geo} alt="..." />
            <div className={mTAP.HAddress}>
              <div className={mTAP.text}>АДРЕС КЛУБА</div>
              <div className={mTAP.address}>{currentGym.address}</div>
            </div>
          </div>
          <div className={mTAP.wrapImgText}>
            <img src={stateConst.stateImage.clock} />
            <div className={mTAP.HAddress}>
              <div className={mTAP.text}>РЕЖИМ РОБОТИ</div>
              <div className={mTAP.address}>{currentGym.address}</div>
            </div>
          </div>
          <div className={mTAP.wrapImgText}>
            <img src={stateConst.stateImage.phone} />
            <div className={mTAP.HAddress}>
              <div className={mTAP.text}>ТЕЛЕФОНИ:</div>
              <div className={mTAP.address}>{currentGym.telephone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapTelAddressPhoto;
