import "./specialist-persones.css";

import Guy1 from "../../../assets/images/guy1.png";
import Guy2 from "../../../assets/images/guy2.png";
import Guy3 from "../../../assets/images/guy3.png";
import Guy4 from "../../../assets/images/guy4.png";

export const SpecialistPersones = () => {
  return (
    <div className="specialist-persones">
      <div className="persones-guy">
        <div className="persones-picture">
          <img src={Guy1} alt="guy1"></img>
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
            <img src={Guy2} alt="Guy2"></img>
          </div>
        </div>
      </div>

      <div className="persones-guy">
        <div className="persones-picture">
          <img src={Guy3} alt="Guy3"></img>
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
            <img src={Guy4} alt="Guy4"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
