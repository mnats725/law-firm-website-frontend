import "./our-advantages.css";

import { AdvantagesWhy } from "./advantages-why";
import { AdvantagesWhyBlocks } from "./advantages-why-blocks";
import { AdvantagesButton } from "./advantages-button";

export const OurAdvantages = () => {
  return (
    <div className="our-advantages-container">
      <div className="our-advantages">
        <AdvantagesWhy />
        <AdvantagesWhyBlocks />
        <AdvantagesButton />
      </div>
    </div>
  );
};
