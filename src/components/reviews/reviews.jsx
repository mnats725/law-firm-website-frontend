import "./reviews.css";

import { ReviewsText } from "./reviews-text";
import { ScrollBlock } from "./scroll-block";
export const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="reviews">
        <div className="reviews-box">
          <ReviewsText />
          <ScrollBlock />
          <div className="frames">
            <div className="frame-1">
              <div className="frame-inside"></div>
            </div>
            <div className="frame"></div>
            <div className="frame"></div>
            <div className="frame"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
