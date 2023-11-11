import { Header } from "../header";
import { BossSays } from "../bosssays";
import { OurAdvantages } from "../our-advantages";
import { Specialist } from "../specialist";
import { Trust } from "../trust";
import { Reviews } from "../reviews/reviews";
import { MustKnow } from "../must-know";
import { SubscribeUs } from "../subscribeus";

import "./app.css";

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <BossSays />
        <OurAdvantages />
        <Specialist />
        <Trust />
        <Reviews />
        <MustKnow />
        <SubscribeUs />
      </div>
    </div>
  );
};
