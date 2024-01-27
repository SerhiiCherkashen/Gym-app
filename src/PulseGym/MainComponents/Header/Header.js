import React from "react";
import header from "./Header.module.css";
import { Link } from "react-router-dom";
import { stateConst } from "../../BusinesaLogik/State/StateConst";

const Header = () => {
  let image = stateConst.stateImage;
  return (
    <div className={header.header}>
      <div>
        <Link className={header.link} to="/">
          <img src={image.logo} />
        </Link>
      </div>
      <div>Мережа спортивних закладiв у Харковi</div>
      <div className={header.link}>
        <Link className={header.link} to="/clubsPage">
          Clubs
        </Link>
        <Link className={header.link} to="/blogPage">
          Blog
        </Link>
        <Link className={header.link} to="/feedbackPage">
          Feedback
        </Link>
        <Link className={header.link} to="/contactsPage">
          Contacts
        </Link>
        <Link className={header.link} to="/photoPage">
          Photo
        </Link>
      </div>
      <div>
        <button
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          }}>
          <img
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            src={image.ua}
          />
        </button>
      </div>
      <div> Tel : 234234 234 234</div>
    </div>
  );
};

export default Header;
