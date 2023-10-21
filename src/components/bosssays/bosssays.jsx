import Boss from "../../assets/images/boss.png";
import Painting from "../../assets/images/paiting.png"

import "./bosssays.css";

export const BossSays = () => {
  return (
    <div className="boss-says">
      <div className="boss-says-container">
        <div className="boss-says-image">
          <img src={Boss}></img>
        </div>
        <div className="boss-says-info">
          <div className="says-info-container">
            <div className="info-container">
              <h2><div className="line-info"></div>Cлово руководителя</h2>
              <h1>
                потому что нам
                <p>не все равно</p>
              </h1>
            </div>
            <h3>
              Я обеспечу представление Ваших интересов в судах общей юрисдикции,
              арбитраже, третейском суде, приму участие в переговорах, окажу
              помощь на стадии досудебного урегулирования споров.
            </h3>
            <div className="quotes">
              <div className="quote1">„</div>
              <div className="quote2">“</div>
              <div className="painting">
                <img src={Painting}></img>
              </div>
            </div>
            <div className="says-info-who">
              <h1>Жемчужин Василий Яковлевич</h1>
              <h2>Генеральный директор</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
