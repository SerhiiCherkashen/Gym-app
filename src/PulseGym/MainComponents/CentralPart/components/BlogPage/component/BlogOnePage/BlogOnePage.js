import React from "react";
import blogOP from "./BlogOnePage.module.css";
import BlackLine from "../../../DopComponents/BlackLine/BlackLine";
import { useDispatch, useSelector } from "react-redux";
import { stateConst } from "../../../../../../BusinesaLogik/State/StateConst";

const BlogOnePage = () => {
  // const dispatch = useDispatch();
  const { blogIndex } = useSelector((state) => state.gymReducer);
  return (
    <div>
      <BlackLine
        leftContext={"BlogOnePage"}
        rightContext={"Watch all contacts on map "}
      />
      <h1>BlogOnePage</h1>
      <div>
        <div>{stateConst.blogInformation[blogIndex].thema}</div>
        <img src={stateConst.blogInformation[blogIndex].image} />
        <div>{stateConst.blogInformation[blogIndex].text}</div>
      </div>
    </div>
  );
};

export default BlogOnePage;
