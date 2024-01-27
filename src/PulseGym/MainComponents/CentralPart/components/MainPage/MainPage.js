import React from "react";
import mainP from "./MainPage.module.css";
import MainBlackLine from "../DopComponents/MainBlackLine/MainBlackLine";

const MainPage = () => {
  return (
    <div>
      <h1 className={mainP.text}>MainPage</h1>
      <MainBlackLine />
    </div>
  );
};

export default MainPage;
