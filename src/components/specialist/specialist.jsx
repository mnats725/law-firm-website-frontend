import "./specialist.css";
import Guy1 from "../../assets/images/guy1.png";
import Guy2 from "../../assets/images/guy2.png";
import Guy3 from "../../assets/images/guy3.png";
import Guy4 from "../../assets/images/guy4.png";

export const Specialist = () => {
  return (
    <div className="specialist-container">
      <div className="specialist">
        <div className="specialist-text">
          <div className="specialist-text-line">
            <div className="specialist-line"></div>
            Наша команда
          </div>
          <h1>Наши специалисты</h1>
          <h3>
            знают<span>свое дело</span>
          </h3>

          <h2>
            Я обеспечу представление Ваших интересов в судах общей юрисдикции,
            арбитраже, третейском суде, приму участие в переговорах
          </h2>
          <button>Заказать звонок</button>
        </div>
        <div className="specialist-persones">

          <div className="persones-guy">
            <div className="persones-picture">
              <img src={Guy1}></img>
            </div>
            <div className="persones-text">
              <h1>Кирилл Александрович</h1>
              <h2>32 лет стажа</h2>
            </div>
          </div>

          <div className="persones-guy-v2">
            <div className="persones-text-v2">
              <h1>Любовь Юрьевна</h1>
              <h2>18 лет стажа</h2>
              <div className="persones-picture">
                <img src={Guy2}></img>
              </div>
            </div>
          </div>

          <div className="persones-guy">
            <div className="persones-picture">
              <img src={Guy3}></img>
            </div>
            <div className="persones-text">
              <h1>Иван Васильевич</h1>
              <h2>17 лет стажа</h2>
            </div>
          </div>

          <div className="persones-guy-v2">
            <div className="persones-text-v2">
              <h1>Анна</h1>
              <h2>12 лет</h2>
              <div className="persones-picture-v2">
                <img src={Guy4}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
