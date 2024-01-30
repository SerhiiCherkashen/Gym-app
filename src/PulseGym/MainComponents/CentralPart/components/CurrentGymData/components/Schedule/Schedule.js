import React from "react";
import schedule from "./Schedule.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { switchSchedule } from "../../../../../../BusinesaLogik/Redux/GymSlice";
import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { stateConst } from "../../../../../../BusinesaLogik/State/StateConst";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Schedule = () => {
  const dispatch = useDispatch();
  const { currentPriceList } = useSelector((state) => state.gymReducer);
  return (
    <div className={schedule.schedule}>
      <div className={schedule.header}>
        <div className={schedule.scheduleText}>Schedule</div>
        <div
          className={schedule.priceListText}
          onClick={() => dispatch(switchSchedule())}>
          PRICE LIST
        </div>
      </div>
      <div className={`${schedule.wrapSchedule} ${schedule.orangeMode}`}>
        <div className={` ${schedule.text} `}>НАПРАВЛЕНИЕ</div>
        <div className={` ${schedule.text} `}>ПН</div>
        <div className={` ${schedule.text} `}>ВТ</div>
        <div className={` ${schedule.text} `}>СР</div>
        <div className={` ${schedule.text} `}>ЧТ</div>
        <div className={` ${schedule.text} `}>ПТ</div>
        <div className={` ${schedule.text} `}>СБ</div>
      </div>
      <div className={schedule.wrapSchedule}>
        <div className={` ${schedule.text} ${schedule.first}`}>ЙОГА</div>
        <div className={` ${schedule.text} ${schedule.pn}`}>17:00</div>
        <div className={` ${schedule.text} ${schedule.sr}`}>17:00</div>
        <div className={` ${schedule.text} ${schedule.pt}`}>17:00</div>
        <div className={` ${schedule.text} ${schedule.first}`}>СТРЕТЧИНГ</div>
        <div className={` ${schedule.text}  ${schedule.pn}`}>18:00</div>
        <div className={` ${schedule.text}  ${schedule.sr}`}>18:00</div>
        <div className={` ${schedule.text}  ${schedule.pt}`}>18:00</div>
        <div className={` ${schedule.text} ${schedule.first}`}>
          FUNCTIONAL TRAINING
        </div>
        <div className={` ${schedule.text}  ${schedule.pn}`}>19:00</div>
        <div className={` ${schedule.text}  ${schedule.sr}`}>19:00</div>
        <div className={` ${schedule.text}  ${schedule.pt}`}>19:00</div>
        <div className={` ${schedule.text} ${schedule.first}`}>ПИЛАТЕС</div>
        <div className={` ${schedule.text}  ${schedule.vt}`}>19:00</div>
        <div className={` ${schedule.text}  ${schedule.cht}`}>19:00</div>
      </div>
    </div>
  );
};

export default Schedule;

{
  /* <Button variant="danger">Danger</Button>
<Carousel>
  <Carousel.Item>
    <img src={stateConst.stateImage.gym} />

    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={stateConst.stateImage.gym2} />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={stateConst.stateImage.gym3} />
    <Carousel.Caption>asd</Carousel.Caption>
  </Carousel.Item>
</Carousel> */
}
