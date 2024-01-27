import React from "react";
import feedbackP from "./FeedbackPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";

const FeedbackPage = () => {
  return (
    <div>
      <h1 className={feedbackP.text}>FeedbackPage</h1>{" "}
      <BlackLine
        leftContext={"Feedbsacks"}
        rightContext={"Send your feedback "}
      />
    </div>
  );
};

export default FeedbackPage;
