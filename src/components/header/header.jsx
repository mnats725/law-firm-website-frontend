import "./header.css";
import { HeaderInfo } from "./header-info";
import { HeaderMenu } from "./header-menu";

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
