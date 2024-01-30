import React from "react";
import photoP from "./PhotoPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import PhotoMap from "./components/PhotoMap";

const PhotoPage = () => {
  return (
    <div>
      <h1 className={photoP.text}>PhotoPage</h1>
      <BlackLine leftContext={"Photos"} rightContext={"Watch your Photos "} />
      <PhotoMap />
    </div>
  );
};

export default PhotoPage;
