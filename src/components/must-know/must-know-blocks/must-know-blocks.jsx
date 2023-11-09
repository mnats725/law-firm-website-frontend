import "./must-know-blocks.css";

import MustKnowImage2 from "../../../assets/images/must-know-2block.png";
import MustKnowImage3 from "../../../assets/images/must-know-3block.png";
import MustKnowImage4 from "../../../assets/images/must-know-4block.png";

export const MustKnowBlocks = () => {
  return (
    <div className="must-know-blocks">
      <div className="must-know-block-first">
        <div className="must-know-block-first-img"></div>
        <div className="must-know-block-text">
          <h2>15 апреля</h2>
          <h1>как использовать закон в свою пользу?</h1>
          <button>Читать</button>
        </div>
      </div>
      <div className="must-know-block">
        <div className="must-know-block-img">
          <img src={MustKnowImage2} alt="MustKnowImage2"></img>
        </div>
        <div className="must-know-block-text">
          <h2>09 апреля</h2>
          <h1>библиотека юристов. Что почитать?</h1>
          <button>Читать</button>
        </div>
      </div>
      <div className="must-know-block">
        <div className="must-know-block-img">
          <img src={MustKnowImage3} alt="MustKnowImage3"></img>
        </div>
        <div className="must-know-block-text">
          <h2>06 марта</h2>
          <h1> на что обратить внимание в документах?</h1>
          <button>Читать</button>
        </div>
      </div>
      <div className="must-know-block">
        <div className="must-know-block-img">
          <img src={MustKnowImage4} alt="MustKnowImage4"></img>
        </div>
        <div className="must-know-block-text">
          <h2>23 февраля</h2>
          <h1>залог успешных дел наших юристов</h1>
          <button>Читать</button>
        </div>
      </div>
    </div>
  );
};
