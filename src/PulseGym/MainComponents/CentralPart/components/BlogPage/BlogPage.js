import React, { useState } from "react";
import blogP from "./BlogPage.module.css";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";
import { Link } from "react-router-dom";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { useDispatch } from "react-redux";
import { blogClick } from "../../../../BusinesaLogik/Redux/GymSlice";

const BlogPage = () => {
  const dispatch = useDispatch();
  const [colorLink, setColorLink] = useState(null);
  const handleMouseEnter = (id) => {
    setColorLink(id);
  };
  const handleMouseLeave = () => {
    setColorLink(false);
  };
  return (
    <div className={blogP.blogP}>
      <BlackLine
        leftContext={"Blog"}
        rightContext={"Watch all contacts on map "}
      />
      <div className={blogP.container}>
        {stateConst.blogInformation.map((element, index) => {
          return (
            <div className={blogP.wrapOneBlog}>
              <img
                style={{
                  border: colorLink === index && "6px solid orange",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                src={element.image}
              />
              <div className={blogP.dateHashtag}>
                <div className={`    ${blogP.dateHash} ${blogP.gray} `}>
                  {element.date}
                </div>
                <div className={`${blogP.dateHash} ${blogP.orange} `}>
                  {element.hashtag}
                </div>
              </div>
              <div
                className={` ${blogP.thema} `}
                onClick={() => dispatch(blogClick(index))}>
                <Link
                  id={index}
                  className={`${blogP.link}  ${
                    colorLink === index && blogP.linkHovered
                  }  `}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  to="/blogOnePage">
                  {element.thema}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
