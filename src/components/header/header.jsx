import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="header-menu">
          <div className="menu-logo">L<div className="line-logo"></div>R</div>
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
          <div className="header-info-consulate"></div>
          <div className="header-info-image">
            <div className="info-consulate-text"></div>
            <div className="info-consulate-input"></div>
            <div className="info-consulate-about"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
