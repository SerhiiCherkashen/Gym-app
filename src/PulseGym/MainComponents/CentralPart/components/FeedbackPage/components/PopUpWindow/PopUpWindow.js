import React from "react";
import p from "./PopUpWindow.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { closePopup, selectIsPopupOpen } from "./popupSlice";
import { stateConst } from "../../../../../../BusinesaLogik/State/StateConst";
import { closePopup } from "../../../../../../BusinesaLogik/Redux/GymSlice";
import {
  changeEmail,
  changeInput,
  changeName,
  changeText,
  clickInput,
  clickSelect,
  clickSend,
} from "../../../../../../BusinesaLogik/Redux/FeedbackSlice";

const PopUpWindow = () => {
  const dispatch = useDispatch();
  const { popUp } = useSelector((state) => state.gymReducer);
  const { feedbackValue } = useSelector((state) => state.feedbackReducer);

  return (
    <div className={`${p.popup} ${popUp.isOpen ? p.open : ""}`}>
      {/* <div className={`${popUp.popup} ${popUp.close}`}> */}
      <div className={p.popupContent}>
        <span className={p.close} onClick={() => dispatch(closePopup())}>
          &times;
        </span>
        <div className={p.formFB}>
          <h1>ОСТАВЬТЕ СВОЙ ОТЗЫВ</h1>
          <h4>
            Уважаемые клиенты, пожалуйста, уточняйте в своих отзывах про какой
            конкретно зал Вы пишете:
          </h4>
          <select
            onClick={(e) => dispatch(clickSelect(e))}
            className={p.select}
            name="select">
            {stateConst.gyms.map((element, index) => {
              return (
                <option>
                  <div>
                    <div>{element.peopleName} </div>

                    <div>{element.address} </div>
                  </div>
                </option>
              );
            })}
          </select>
          <input
            onClick={() => dispatch(clickInput("name"))}
            onChange={(e) =>
              dispatch(changeInput({ id: "name", value: e.target.value }))
            }
            value={feedbackValue.inputNameValue}
          />
          <input
            onClick={() => dispatch(clickInput("email"))}
            onChange={(e) =>
              dispatch(changeInput({ id: "email", value: e.target.value }))
            }
            value={feedbackValue.inputEmailValue}
          />
          <input
            onClick={() => dispatch(clickInput("text"))}
            onChange={(e) =>
              dispatch(changeInput({ id: "text", value: e.target.value }))
            }
            value={feedbackValue.inputTextValue}
          />
          <button onClick={() => dispatch(clickSend())} className={p.send}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpWindow;
