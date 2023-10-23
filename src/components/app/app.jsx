import { Header } from "../header";
import { BossSays } from "../bosssays";
import { Specialist } from "../specialist/specialist";

import "./app.css";

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <BossSays />
        <Specialist />
      </div>
    </div>
  );
};
