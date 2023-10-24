import "./trust.css";

import { TrustBlocks } from "./trust-blocks";

export const Trust = () => {
  return (
    <div className="trust-container">
      <div className="trust-bgc">
        <div className="trust">
          <h2>Нам доверяют</h2>
          <h1>
            Они <span>выбрали</span> нас
          </h1>
          <TrustBlocks />
        </div>
      </div>
    </div>
  );
};
