import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="header-menu">
          <div className="menu-logo">
            L<div className="line-logo"></div>R
          </div>
          <div className="menu-links">
            <p>Главная</p>
            <p>Услуги</p>
            <p>Сопровождение</p>
            <p>Полезное</p>
            <p>О компании</p>
            <p>Контакты</p>
          </div>
          <div className="menu-phone">+7 (999) 890 09 98</div>
        </div>
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
            <img src="/src/assets/images/woman_header.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
