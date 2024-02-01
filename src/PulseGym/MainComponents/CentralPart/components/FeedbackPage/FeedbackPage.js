import React from "react";
import feedbackP from "./FeedbackPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "../../../../BusinesaLogik/Redux/GymSlice";
import PopUpWindow from "./components/PopUpWindow/PopUpWindow";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";

const FeedbackPage = () => {
  const dispatch = useDispatch();
  const { feedback } = useSelector((state) => state.feedbackReducer);
  // const { feedback } = useSelector((state) => state.gymReducer);
  // console.log("data : ", new Date());
  return (
    <div>
      {/* <h1 className={feedbackP.text}>FeedbackPage</h1>{" "} */}
      <BlackLine
        leftContext={"Feedbsacks"}
        rightContext={"Send your feedback "}
      />
      <div className={feedbackP.addFeedback}>
        <button onClick={() => dispatch(openPopup())}>Add Feedback</button>
        <PopUpWindow />
      </div>
      <div className={feedbackP.container}>
        {feedback.map((element) => {
          return (
            <div className={feedbackP.wrapFeedback}>
              <div className={feedbackP.header}>
                <div className={feedbackP.imgNameAddress}>
                  <img src={stateConst.stateImage.edit1} />
                  <div className={feedbackP.text}>{element.name} </div>
                  <div className={feedbackP.text}>{element.address} </div>
                </div>
                <div className={feedbackP.text}>{"Date"}</div>
              </div>
              <div className={feedbackP.text}>{element.text}</div>
              <div className={feedbackP.orangeLine}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackPage;
