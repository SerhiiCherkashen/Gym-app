import React from "react";
import blogP from "./BlogPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";

const BlogPage = () => {
  return (
    <div>
      <h1 className={blogP.text}>BlogPage</h1>
      <BlackLine leftContext={"Information"} rightContext={"LINKS"} />
    </div>
  );
};

export default BlogPage;
