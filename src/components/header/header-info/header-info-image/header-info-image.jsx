import WomanPicture from "../../../../assets/images/woman_header.png";

import "./header-info-image.css";

export const HeaderInfoImage = () => {
  return (
    <div className="header-info-image">
      <img src={WomanPicture} alt="woman" />
    </div>
  );
};
