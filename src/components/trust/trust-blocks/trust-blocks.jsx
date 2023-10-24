import "./trust-blocks.css";

import MiniCooper from "../../../assets/images/mini-cooper.png";
import Valorant from "../../../assets/images/valorant.png";
import Skolkovo from "../../../assets/images/skolkovo.png";
import Sber from "../../../assets/images/sber.png";
import Psyhology from "../../../assets/images/psyhology.png";
import FirstChanel from "../../../assets/images/first-chanel.png";

export const TrustBlocks = () => {
  return (
    <div className="trust-blocks">
      <div className="trust-block">
        <img src={MiniCooper} alt="mini-cooper"></img>
        <p>Mini cooper</p>
      </div>
      <div className="trust-block">
        <img src={Sber} alt="sber"></img>
        <p>Сбер</p>
      </div>
      <div className="trust-block">
        <img src={Skolkovo} alt="skolkovo"></img>
        <p>Сколково</p>
      </div>
      <div className="trust-block">
        <img src={Psyhology} alt="psyhology"></img>
        <p>Psyhology</p>
      </div>
      <div className="trust-block">
        <img src={Valorant} alt="valorant"></img>
        <p>Valorant</p>
      </div>
      <div className="trust-block">
        <img src={FirstChanel}alt="first-chanel"></img>
        <p>Первый канал</p>
      </div>
    </div>
  );
};
