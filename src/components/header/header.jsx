import "./header.css";
import { HeaderInfo } from "./header-info";
import { HeaderMenu } from "./header-menu";
import { BossSays } from "../bosssays";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <HeaderMenu />
        <HeaderInfo />
        <BossSays />
      </div>
    </div>
  );
};
