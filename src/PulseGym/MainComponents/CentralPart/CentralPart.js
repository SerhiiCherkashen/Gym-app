import React from "react";
import cp from "./CentralPart.module.css";
import MainPage from "./components/MainPage/MainPage";
import ClubsPage from "./components/ClubsPage/ClubsPage";
import BlogPage from "./components/BlogPage/BlogPage";
import FeedbackPage from "./components/FeedbackPage/FeedbackPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import PhotoPage from "./components/PhotoPage/PhotoPage";
import { Routes, Route } from "react-router-dom";
import CurrentGymData from "./components/CurrentGymData/CurrentGymData";

const CentralPart = () => {
  return (
    <div className={cp.centralPart}>
      {/* <h1>CentralPart</h1> */}
      <Routes>
        <Route
          path="/clubsPage/currentGymData"
          element={<CurrentGymData />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/clubsPage" element={<ClubsPage />}></Route>
        <Route path="/blogPage" element={<BlogPage />}></Route>
        <Route path="/feedbackPage" element={<FeedbackPage />}></Route>
        <Route path="/contactsPage" element={<ContactsPage />}></Route>
        <Route path="/photoPage" element={<PhotoPage />}></Route>
      </Routes>
    </div>
  );
};

export default CentralPart;
