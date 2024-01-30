import React from "react";
import feedbackP from "./FeedbackPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { useDispatch } from "react-redux";
import { openPopup } from "../../../../BusinesaLogik/Redux/GymSlice";
import PopUpWindow from "./components/PopUpWindow/PopUpWindow";

const FeedbackPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className={feedbackP.text}>FeedbackPage</h1>{" "}
      <BlackLine
        leftContext={"Feedbsacks"}
        rightContext={"Send your feedback "}
      />
      <div>
        <button onClick={() => dispatch(openPopup())}>Открыть окно</button>
        <PopUpWindow />
      </div>
    </div>
  );
};

export default FeedbackPage;
