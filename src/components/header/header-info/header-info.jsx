import "./header-info.css";
import WomanPicture from "../../../assets/images/woman_header.png";
import Paper from "../../../assets/images/paper.png";
import Paper2 from "../../../assets/images/paper2.png";
import Paper3 from "../../../assets/images/paper3.png";
export const HeaderInfo = () => {
  return (
    <div className="header-info">
      <div className="header-info-consulate">
        <div className="info-consulate-text">
          <h1>
            Решим любой
            <br /> правовой вопрос
          </h1>
          <h2>Помощь в решении любого правового вопроса в вашу пользу</h2>
        </div>
        <div className="info-consulate-input">
          <h1>Нужна консультация?</h1>
          <div className="consulate-inputs">
            <input
              type="tel"
              name="phone_number"
              list="tel-list"
              placeholder="+7 (___) ___ __ __"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            ></input>
            <button>Заказать звонок</button>
          </div>
        </div>
        <div className="info-consulate-about"></div>
      </div>
      <div className="header-info-image">
        <img src={WomanPicture} />
      </div>
      <div className="advertising">
        <div className="advertising-block1">
          <h1>89%</h1>
          <h2>Выйгранных дел</h2>
        </div>
        <div className="advertising-block2">
          <h1>34</h1>
          <h2>Сотрудника в штате</h2>
        </div>
        <div className="advertising-block3">
          <h1>18</h1>
          <h2>Лет на рынке</h2>
        </div>
        <div className="Mini-images">
          <div className="paper">
            <img src={Paper} />
          </div>
          <div className="paper2">
            <img src={Paper2} />
          </div>
          <div className="paper3">
            <img src={Paper3} />
          </div>
        </div>
      </div>
    </div>
  );
};
