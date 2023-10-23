import { Header } from "../header";
import { BossSays } from "../bosssays";
import { OurAdvantages } from "../our-advantages";

import "./app.css";

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <BossSays />
        <OurAdvantages />
      </div>
    </div>
  );
};
