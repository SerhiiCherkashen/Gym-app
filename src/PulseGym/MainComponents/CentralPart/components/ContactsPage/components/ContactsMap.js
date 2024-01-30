import React from "react";
import contactsMap from "./ContactsMap.module.css";
import { stateConst } from "../../../../../BusinesaLogik/State/StateConst";

const ContactsMap = () => {
  return (
    <div className={contactsMap.text}>
      <h1>ContactsMap</h1>
      <div>
        {stateConst.gyms.map((element) => {
          return (
            <div>
              <div className={contactsMap.wrapOneGym}>
                <div className={contactsMap.leftPart}>
                  <div className={contactsMap.orangeText}>
                    PULSE GYM {element.peopleName}
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
                <div>MAP</div>
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
