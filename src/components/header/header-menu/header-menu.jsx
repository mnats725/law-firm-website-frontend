import "./header-menu.css";

export const HeaderMenu = () => {
  return (
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
  );
};
