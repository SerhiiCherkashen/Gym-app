import React from "react";
import p from "./PopUpWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { closePopup, selectIsPopupOpen } from "./popupSlice";
import { stateConst } from "../../../../../../BusinesaLogik/State/StateConst";
import { closePopup } from "../../../../../../BusinesaLogik/Redux/GymSlice";

const PopUpWindow = () => {
  const dispatch = useDispatch();
  const { popUp } = useSelector((state) => state.gymReducer);

  return (
    <div className={`${p.popup} ${popUp.isOpen ? p.open : ""}`}>
      {/* <div className={`${popUp.popup} ${popUp.close}`}> */}
      <div className={p.popupContent}>
        <span className={p.close} onClick={() => dispatch(closePopup())}>
          &times;
        </span>
        <p>Forma Содержимое всплывающего окна...</p>
      </div>
    </div>
  );
};

export default PopUpWindow;
