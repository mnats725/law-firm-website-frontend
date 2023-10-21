import "./header-info.css";
import { Advertising } from "./advertising";
import { HeaderInfoImage } from "./header-info-image"
import { HeaderInfoConsulate } from "./header-info-consulate";
export const HeaderInfo = () => {
  return (
    <div className="header-info">
      <HeaderInfoConsulate />
      <HeaderInfoImage />
      <Advertising />
    </div>
  );
};
