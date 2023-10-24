import "./trust.css";

import MiniCooper from "../../assets/images/mini-cooper.png";
import Valorant from "../../assets/images/valorant.png";
import Skolkovo from "../../assets/images/skolkovo.png";
import Sber from "../../assets/images/sber.png";
import Psyhology from "../../assets/images/psyhology.png";
import FirstChanel from "../../assets/images/first-chanel.png";

export const Trust = () => {
  return (
    <div className="trust-container">
      <div className="trust-bgc">
        <div className="trust">
          <h2>Нам доверяют</h2>
          <h1>
            Они <span>выбрали</span> нас
          </h1>
          <div className="trust-blocks">
            <div className="trust-block">
              <img src={MiniCooper}></img>
              <p>Mini cooper</p>
            </div>
            <div className="trust-block">
              <img src={Sber}></img>
              <p>Сбер</p>
            </div>
            <div className="trust-block">
              <img src={Skolkovo}></img>
              <p>Сколково</p>
            </div>
            <div className="trust-block">
              <img src={Psyhology}></img>
              <p>Psyhology</p>
            </div>
            <div className="trust-block">
              <img src={Valorant}></img>
              <p>Valorant</p>
            </div>
            <div className="trust-block">
              <img src={FirstChanel}></img>
              <p>Первый канал</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
