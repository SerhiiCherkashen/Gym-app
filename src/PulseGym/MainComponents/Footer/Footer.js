import React from "react";
import footer from "./Footer.module.css";
import { Link } from "react-router-dom";

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
          <Link className={footer.link} to="/">
            <h3>Main</h3>
          </Link>
          <Link className={footer.link} to="/clubsPage">
            <h3>All Clubs</h3>
          </Link>
          <Link className={footer.link} to="/feedbackPage">
            <h3>Feedback</h3>
          </Link>
        </div>
        <div>
          <Link className={footer.link} to="/contactsPage">
            <h3>Contacts</h3>
          </Link>
          <Link className={footer.link} to="/blogPage">
            <h3>Blog</h3>
          </Link>
          <Link className={footer.link} to="/photoPage">
            <h3>Photo</h3>
          </Link>
        </div>
        <div>
          <Link
            className={footer.link}
            to="https://www.facebook.com/groups/pulse.gym.kh">
            <h3>FaceBook</h3>
          </Link>
        </div>
        <div>
          <Link
            className={footer.link}
            to="https://pulse-gym.com.ua/ru/regulations/pravyla-poseshhenyya-sportyvnogo-kluba-tehnyka-bezopasnosty/">
            <h3>Rules</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
