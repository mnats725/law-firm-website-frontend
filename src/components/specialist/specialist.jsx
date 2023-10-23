import "./specialist.css";

import { SpecialistText } from "./specialist-text";
import { SpecialistPersones } from "./specialist-persones";

export const Specialist = () => {
  return (
    <div className="specialist-container">
      <div className="specialist">
        <SpecialistText />
        <SpecialistPersones/>
      </div>
    </div>
  );
};
