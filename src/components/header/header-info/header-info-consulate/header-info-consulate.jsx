import { InfoConsulateInput } from "./info-consulate-input";

import "./header-info-consulate.css";

export const HeaderInfoConsulate = () => {
  return (
    <div className="header-info-consulate">
      <div className="info-consulate-text">
        <h1>
          Решим любой
          <br /> правовой вопрос
        </h1>
        <h2>Помощь в решении любого правового вопроса в вашу пользу</h2>
      </div>
      <InfoConsulateInput />
      <div className="info-consulate-about"></div>
    </div>
  );
};
