import React from "react";
import blogP from "./BlogPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";
import MapComponent from "../DopComponents/MapComponent/MapComponent";

const BlogPage = () => {
  return (
    <div className={blogP.blogP}>
      <div className={blogP.map}>
        <MapComponent
          arrayCoordinates={[
            [50.006, 36.229],
            [50.006, 36.25],
            [50.006, 36.27],
            [50.006, 36.3],
          ]}
          center={[50.006, 36.229]}
          zoom={11}
        />
      </div>
    </div>
  );
};

export default BlogPage;
