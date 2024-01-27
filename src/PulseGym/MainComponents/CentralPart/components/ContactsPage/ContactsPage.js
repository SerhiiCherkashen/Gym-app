import React from "react";
import contactsP from "./ContactsPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";

const ContactsPage = () => {
  return (
    <div className={contactsP.text}>
      <h1>ContactsPage</h1>
      <BlackLine
        leftContext={"Contacts"}
        rightContext={"Watch all contacts on map "}
      />
    </div>
  );
};

export default ContactsPage;
