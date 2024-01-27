import React from "react";
import mainBlackLine from "./MainBlackLine.module.css";
import { Link } from "react-router-dom";
import { stateConst } from "../../../../../BusinesaLogik/State/StateConst";

const MainBlackLine = (props) => {
  let image = stateConst.stateImage;
  return (
    <div>
      <div className={mainBlackLine.blackLine}>
        <div className={mainBlackLine.leftContext}>
          <div className={mainBlackLine.LaskavoProsimo}>Laskavo prosimo v </div>
          <div className={mainBlackLine.pulsGym}>PULS GYM</div>
          <div className={mainBlackLine.wrapTreeImgText}>
            <div className={mainBlackLine.wrapImg}>
              <img
                src="https://pulse-gym.com.ua/storage/9bXnOdqTXWDv27FyfYDWluWYu4JHRLmN9G7okj5o.png"
                alt="img"
              />
              <img
                src="https://pulse-gym.com.ua/storage/jrTRUVkRF96FhjtCoat7Vjc5x6ioH8w2BKrlr2mB.png"
                alt="img"
              />
              <img
                src="https://pulse-gym.com.ua/storage/7MF74IeYldjSV6P0BFq088j2a8vAWF0lE5NNl3NM.png"
                alt="img"
              />
            </div>
            <div>
              {/* //className={mainBlackLine.textAfterStar} */}
              <span>
                Тисячі постійних відвідувачів Pulse Gym радять нас своїм друзям
                та знайомим
              </span>
              <div>
                <div className={mainBlackLine.wrapStar}>
                  <img src={image.star} />
                  <img src={image.star} />
                  <img src={image.star} />
                  <img src={image.star} />
                  <img src={image.star} />
                </div>
                Приєднуйся і ти!
              </div>
            </div>
          </div>
          <div className={mainBlackLine.wrapBtnLink}>
            <button>Look</button>
            <Link className={mainBlackLine.link} to="/photoPage">
              <h3>Look photo</h3>
            </Link>
          </div>
        </div>
        <div>
          <img src={image.girl} />
          <img src={image.man} />
        </div>
        <div className={mainBlackLine.rightContext}>{props.rightContext}</div>
      </div>
    </div>
  );
};

export default MainBlackLine;
