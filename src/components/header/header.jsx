import { HeaderInfo } from "./header-info";
import { HeaderMenu } from "./header-menu";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <HeaderMenu />
        <HeaderInfo />
      </div>
    </div>
  );
};
