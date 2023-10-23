import "./our-advantages.css";

import FullTime from "../../assets/images/full-time.png";
import Prof from "../../assets/images/prof.png";
import Think from "../../assets/images/think.png";
import Mind from "../../assets/images/mind.png";

export const OurAdvantages = () => {
  return (
    <div className="our-advantages-container">
      <div className="our-advantages">
        <div className="advantages-why">
          <p className="why-1">Наши преимущества</p>
          <p className="why-2">
            Почему <p>выбирают</p> нас
          </p>
        </div>
        <div className="advantages-why-blocks">
          <div className="why-block">
            <img src={FullTime} alt="FullTime"></img>
            <h1>Круглосуточная поддержка</h1>
            <h2>
              Звонки по любым вопросам в удобное для вас время. Мы всегда рядом
            </h2>
          </div>
          <div className="why-block">
            <img src={Prof} alt="Prof"></img>
            <h1>Высокая экспертность</h1>
            <h2>
              Наши специалисты постоянно улучшают свои навыки и изучают новые
              подходы
            </h2>
          </div>
          <div className="why-block">
            <img src={Think} alt="Think"></img>
            <h1>Думаем на два шага вперед</h1>
            <h2>
              Звонки по любым вопросам в удобное для вас время. Мы всегда рядом
            </h2>
          </div>
          <div className="why-block">
            <img src={Mind} alt="Mind"></img>
            <h1>Знания - наша сила</h1>
            <h2>
              Звонки по любым вопросам в удобное для вас время мы всегда рядом
            </h2>
          </div>
        </div>
        <button>Заказать звонок</button>
      </div>
    </div>
  );
};
