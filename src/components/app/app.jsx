import { Header } from "../header";
import { BossSays } from "../bosssays";

import "./app.css";

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <BossSays />
      </div>
    </div>
  );
};
