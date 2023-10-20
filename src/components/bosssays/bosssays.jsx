import "./bosssays.css";

export const BossSays = () => {
  return (
    <div className="boss-says">
      <div className="boss-says__image"></div>
      <div className="boss-says__text">
        <div className="text__container">
          <h2>
            Потому что нам <p>не все равно</p>
          </h2>
          <h1></h1>
          <h3>
            Я обеспечу представление Ваших интересов в судах общей юрисдикции,
            арбитраже, третейском суде, приму участие в переговорах, окажу
            помощь на стадии досудебного урегулирования споров.
          </h3>
          <div className="text__who">
            <div className="text__fio">
              <h1>Жемчужин Василий Яковлевич</h1>
              <h2>Генеральный директор</h2>
            </div>
            <div className="text__painting"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
