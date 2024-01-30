import React from "react";
import contactsMap from "./ContactsMap.module.css";
import { stateConst } from "../../../../../BusinesaLogik/State/StateConst";
import MapComponent from "../../DopComponents/MapComponent/MapComponent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseGym } from "../../../../../BusinesaLogik/Redux/GymSlice";

const ContactsMap = () => {
  const dispatch = useDispatch();
  return (
    <div className={contactsMap.text}>
      <h1>ContactsMap</h1>
      <div>
        {stateConst.gyms.map((element) => {
          return (
            <div className={contactsMap.wrapBlockOneGym}>
              <div className={contactsMap.wrapOneGym}>
                <div className={contactsMap.leftPart}>
                  <div
                    onClick={() => dispatch(chooseGym(element.id))}
                    className={contactsMap.orangeText}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/clubsPage/currentGymData">
                      PULSE GYM {element.peopleName}
                    </Link>
                  </div>
                  <div>
                    <span> Адрес:</span> {element.address}
                  </div>
                  <div>
                    <span> Режим работы :</span> {element.modeOfOperation}{" "}
                  </div>
                  <div>
                    <span> Телефоны :</span> {element.telephone}
                  </div>
                </div>
                <div className={contactsMap.map}>
                  <MapComponent
                    arrayCoordinates={[element.coordinates]}
                    center={element.coordinates}
                    zoom={12}
                    borderRadius={"50px"}
                  />
                </div>
              </div>
              <div className={contactsMap.orangeLine}> </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactsMap;
