import { Quotes } from "./quotes";
import { SaysInfoWho } from "./says-info-who";
import { InfoContainer } from "./info-container";

import "./boss-says-info.css";

export const BossSaysInfo = () => {
  return (
    <div className="boss-says-info">
      <div className="says-info-container">
        <InfoContainer />
        <Quotes />
        <SaysInfoWho />
      </div>
    </div>
  );
};
