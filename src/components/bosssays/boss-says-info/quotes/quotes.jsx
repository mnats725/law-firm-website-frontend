import { QuotesPaiting } from "./quotes-painting";
import { QuotesItems } from "./quotes-items/quotes-items";

import "./quotes.css";

export const Quotes = () => {
  return (
    <div className="quotes">
      <QuotesItems />
      <QuotesPaiting />
    </div>
  );
};
