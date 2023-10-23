import "./our-advantages.css";

import { AdvantagesWhy } from "./advantages-why";
import { AdvantagesWhyBlocks } from "./advantages-why-blocks";
import { AdvantagesButton } from "./advantages-button";

import FullTime from "../../assets/images/full-time.png";
import Prof from "../../assets/images/prof.png";
import Think from "../../assets/images/think.png";
import Mind from "../../assets/images/mind.png";

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
