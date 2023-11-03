import "./reviews.css";

import ButtonRight from "../../assets/images/button-right.png";
import ButtonLeft from "../../assets/images/button-left.png";

export const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="reviews">
        <div className="reviews-box">
          <div className="reviews-text">
            <h2>О нас говорят</h2>
            <h1>
              <span>Отзывы</span> наших клиентов
            </h1>
          </div>
          <div className="scroll-block-container">
            <button>
              <img src={ButtonLeft} alt="icon"></img>
            </button>
            <div className="scroll-block">
              <div className="scroll-block-bg"></div>
              <div className="block-container">
                <div className="block-person"></div>
                <div className="scroll-block-text">
                  <div className="block-text-big">
                    Я обеспечу представление Ваших интересов в судах общей
                    юрисдикции, арбитраже, третейском суде, приму участие в
                    переговорах, окажу помощь на стадии досудебного
                    урегулирования споров.
                  </div>
                  <div className="block-text-who">
                    <h1>Юлия Воробьева</h1>
                    <h2>Директор компании "Воробьева и ко"</h2>
                  </div>
                </div>
              </div>
            </div>
            <button>
              <img src={ButtonRight} alt="icon"></img>
            </button>
          </div>
          <div className="frames">
            <div className="frame-1">
              <div className="frame-inside"></div>
            </div>
            <div className="frame"></div>
            <div className="frame"></div>
            <div className="frame"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
