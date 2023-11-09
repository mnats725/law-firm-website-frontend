import "./must-know.css";

import { MustKnowBlocks } from "./must-know-blocks";
import { MustKnowText } from "./must-know-text";

export const MustKnow = () => {
  return (
    <div className="must-know-container">
      <div className="must-know">
        <MustKnowText />
        <MustKnowBlocks />
      </div>
    </div>
  );
};
