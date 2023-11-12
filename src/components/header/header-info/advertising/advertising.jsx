import Paper from "../../../../assets/images/paper.png";
import Paper2 from "../../../../assets/images/paper2.png";
import Paper3 from "../../../../assets/images/paper3.png";

import "./advertising.css";

export const Advertising = () => {
  return (
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
          <img src={Paper} alt="paper" />
        </div>
        <div className="paper2">
          <img src={Paper2} alt="paper2" />
        </div>
        <div className="paper3">
          <img src={Paper3} alt="paper3" />
        </div>
      </div>
    </div>
  );
};
