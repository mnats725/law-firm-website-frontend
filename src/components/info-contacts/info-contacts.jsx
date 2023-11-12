import "./info-contacts.css";

import Punkt from "../../assets/images/punkt.png";

export const InfoContacts = () => {
  return (
    <div className="info-contacts-container">
      <div className="info-contacts">
        <div className="map">
          <div className="punkt">
            <img src={Punkt} alt="punkt"></img>
          </div>
        </div>
        <div className="contacts">
          <h2>
            <div className="line"></div>На связи с нами
          </h2>
          <h1>
            <span>Контактная</span>Информация
          </h1>
          <div className="contacts-src">
            <div className="left-contacts">
              <h4>
                Телефон<span className="span-number">+7 (999) 890 09 98</span>
              </h4>
              <h4>
                Адрес<span>Москва, ул. Арбат, д. 1</span>
              </h4>
            </div>
            <div className="right-contacts">
              <h4>
                Почта<span>Info@ya.ru</span>
              </h4>
            </div>
          </div>
          <h3>Нужна консультация?</h3>
          <div className="zakaz-call">
            <input
              type="tel"
              name="phone_number"
              list="tel-list"
              placeholder=" +7 (___) ___ __ __"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            ></input>
            <button>Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
};
