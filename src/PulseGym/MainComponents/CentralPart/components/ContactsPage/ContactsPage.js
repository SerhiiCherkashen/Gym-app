import React from "react";
import contactsP from "./ContactsPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import ContactsMap from "./components/ContactsMap";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  return (
    <div className={contactsP.text}>
      <h1>ContactsPage</h1>
      <BlackLine
        leftContext={"Contacts"}
        rightContext={"Watch all contacts on map "}
      />
      <ContactsMap />
    </div>
  );
};

export default ContactsPage;
