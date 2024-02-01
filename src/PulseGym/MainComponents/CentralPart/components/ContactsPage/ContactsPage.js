import React from "react";
import contactsP from "./ContactsPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import ContactsMap from "./components/ContactsMap";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  return (
    <div className={contactsP.text}>
      <BlackLine
        leftContext={"Contacts"}
        rightContext={"Watch all contacts on map "}
      />
      <div className={contactsP.container}>
        <ContactsMap />
      </div>
    </div>
  );
};

export default ContactsPage;
