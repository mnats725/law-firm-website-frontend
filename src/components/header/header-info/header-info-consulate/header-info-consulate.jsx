import { InfoConsulateInput } from "./info-consulate-input";
import { InfoConsulateText } from "./info-consulate-text";

import "./header-info-consulate.css";

export const HeaderInfoConsulate = () => {
  return (
    <div className="header-info-consulate">
      <InfoConsulateText />
      <InfoConsulateInput />
    </div>
  );
};
