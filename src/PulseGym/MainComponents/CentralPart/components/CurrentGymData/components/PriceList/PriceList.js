import React from "react";
import priceList from "./PriceList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { switchSchedule } from "../../../../../../BusinesaLogik/Redux/GymSlice";

const PriceList = () => {
  const dispatch = useDispatch();
  const { currentPriceList } = useSelector((state) => state.gymReducer);
  return (
    <div className={priceList.priceList}>
      <div
        className={`${priceList.priceListTextSchedule} ${priceList.displayFJCSBAIC} `}>
        <div className={priceList.priceListText}>PriceList</div>
        <div
          className={priceList.scheduleText}
          onClick={() => dispatch(switchSchedule())}>
          Raspisanie
        </div>
      </div>
      <div className={priceList.right}>
        {currentPriceList.map((element, index) => {
          return (
            <div key={index + Date.now() + Math.ceil(Math.random() * 100)}>
              <div className={priceList.nameServiceTheme}> {element.name}</div>
              <div>
                {element.services.map((item) => {
                  return (
                    <div
                      className={`${priceList.servicePrice} ${priceList.displayFJCSBAIC} `}>
                      <div className={priceList.serviceName}>
                        {item.service}
                      </div>
                      <div className={priceList.price}>{item.price} </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceList;
