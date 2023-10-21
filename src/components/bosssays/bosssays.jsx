import { BossSaysInfo } from "./boss-says-info";
import { BossSaysImage } from "./boss-says-image";

import "./bosssays.css";

export const BossSays = () => {
  return (
    <div className="boss-says">
      <div className="boss-says-container">
        <BossSaysImage />
        <BossSaysInfo />
      </div>
    </div>
  );
};
