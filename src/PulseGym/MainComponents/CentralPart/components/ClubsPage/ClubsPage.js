import React from "react";
import clubsP from "./ClubsPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseGym, clickFn } from "../../../../BusinesaLogik/Redux/GymSlice";

const ClubsPage = () => {
  const dispatch = useDispatch();
  return (
    <div className={clubsP.clubsPage}>
      {/* <h1 className={clubsP.text}>ClubsPage</h1> */}
      <BlackLine leftContext={"Our Clubs"} rightContext={"list"} />

      <div className={clubsP.gyms}>
        {stateConst.gyms.map((element, index) => {
          return (
            <div
              onClick={() => dispatch(chooseGym(element.id))}
              className={clubsP.oneGym}>
              <div
                style={{ textDecoration: "none" }}
                className={clubsP.peopleName}>
                {element.peopleName}{" "}
              </div>
              <div className={clubsP.address}>{element.address} </div>
              <Link to="/clubsPage/currentGymData">
                <img src={element.image} alt="---" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClubsPage;
