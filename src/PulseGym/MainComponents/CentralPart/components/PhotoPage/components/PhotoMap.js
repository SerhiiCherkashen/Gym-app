import React from "react";
import photoMap from "./PhotoMap.module.css";
import { stateConst } from "../../../../../BusinesaLogik/State/StateConst";
import { Link } from "react-router-dom";
import PagePhotoOneGym from "../../PagePhotoOneGym/PagePhotoOneGym";
import { useDispatch } from "react-redux";
import { chooseGym } from "../../../../../BusinesaLogik/Redux/GymSlice";

const PhotoMap = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={photoMap.photoMap}>
        {stateConst.gyms.map((element, index) => {
          return (
            <div
              onClick={() => dispatch(chooseGym(element.id))}
              key={index + Date.now()}
              className={photoMap.wrapOneGym}>
              <div className={photoMap.photoPeopleAddress}>
                <img src={element.image} />
                <div>
                  <div className={photoMap.orangeText}>PULSE GYM</div>
                  <div className={photoMap.peopleName}>
                    {element.peopleName}
                  </div>
                </div>
              </div>
              <div className={photoMap.address}>{element.address}</div>
              <Link
                to="/clubsPage/pagePhotoOneGym"
                element={
                  <PagePhotoOneGym
                    leftContext={"element.peopleName"}
                    rightContext={"element.address"}
                  />
                }>
                <div
                  // style={{ textDecoration: "none" }}
                  className={photoMap.watchPhoto}>
                  СМОТРЕТЬ ФОТО
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoMap;
