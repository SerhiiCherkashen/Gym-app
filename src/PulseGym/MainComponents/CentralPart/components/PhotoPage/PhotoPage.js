import React from "react";
import photoP from "./PhotoPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import PhotoMap from "./components/PhotoMap";

const PhotoPage = () => {
  return (
    <div>
      <BlackLine leftContext={"Photos"} rightContext={"Watch your Photos "} />
      <div className={photoP.container}>
        <PhotoMap />
      </div>
    </div>
  );
};

export default PhotoPage;
