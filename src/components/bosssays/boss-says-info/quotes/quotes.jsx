import Painting from "../../../../assets/images/paiting.png";

import "./quotes.css";

export const Quotes = () => {
  return (
    <div className="quotes">
      <div className="quote1">„</div>
      <div className="quote2">“</div>
      <div className="painting">
        <img src={Painting}></img>
      </div>
    </div>
  );
};
