import "./contacts.css";

import { ZakazCall } from "./zakaz-call";

export const Contacts = () => {
  return (
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
      <ZakazCall />
    </div>
  );
};
