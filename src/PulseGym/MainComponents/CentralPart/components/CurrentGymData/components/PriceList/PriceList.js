import React from "react";
import priceList from "./PriceList.module.css";
import { useSelector } from "react-redux";

const PriceList = () => {
  const { currentPriceList } = useSelector((state) => state.gymReducer);
  return (
    <div className={priceList.priceList}>
      <div
        className={`${priceList.priceListTextSchedule} ${priceList.displayFJCSBAIC} `}>
        <div className={priceList.priceListText}>PriceList</div>
        <div>Raspisanie</div>
      </div>
      <div className={priceList.right}>
        {currentPriceList.map((element) => {
          return (
            <div>
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
      {/* <div className={priceList.right}> {currentPriceList[0].name}</div> */}
    </div>
  );
};

export default PriceList;
