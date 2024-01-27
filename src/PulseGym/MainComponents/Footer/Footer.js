import React from "react";
import footer from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footer.wrap}>
      <hr className={footer.hr}></hr>
      <line></line>
      <h1 className={footer.text}>Footer</h1>
      <div className={footer.footer}>
        <div>
          <h3>Email</h3>
          <h3>Text</h3>
        </div>
        <div>
          <h3>Golovna</h3>
          <h3>All Clibs</h3>
          <h3>Feedback</h3>
        </div>
        <div>
          <h3>Contacts</h3>
          <h3>Blog</h3>
          <h3>Photo</h3>
        </div>
        <div>
          <h3>FaceBook</h3>
        </div>
        <div>
          <h3>Rules</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
