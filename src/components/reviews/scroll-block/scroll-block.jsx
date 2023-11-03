import "./scroll-block.css";

import { ScrollBlockText } from "./scroll-block-text";

import ButtonRight from "../../../assets/images/button-right.png";
import ButtonLeft from "../../../assets/images/button-left.png";

export const ScrollBlock = () => {
  return (
    <div className="scroll-block-container">
      <button>
        <img src={ButtonLeft} alt="icon"></img>
      </button>
      <div className="scroll-block">
        <div className="scroll-block-bg"></div>
        <div className="block-container">
          <div className="block-person"></div>
          <ScrollBlockText />
        </div>
      </div>
      <button>
        <img src={ButtonRight} alt="icon"></img>
      </button>
    </div>
  );
};
