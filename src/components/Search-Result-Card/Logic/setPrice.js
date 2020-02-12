import React from "react";
import css from "../SearchResultCard.css";

const setPrice = input => {
  if (input.source === "ticketmaster") {
    if (input.priceRanges[0].currency === "USD") {
      if (input.priceRanges[0].min !== null) {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              {/* Starting at {`$${input.priceRanges[0].min}.00`} */}
              Starting at
              {`${
                Number.isInteger(input.priceRanges[0].min) ||
                input.priceRanges[0].min % 1 === 0
                  ? ` $${input.priceRanges[0].min}.00`
                  : ` $${input.priceRanges[0].min}0`
              }`}
            </li>
          </React.Fragment>
        );
      }
    }
  } else if (input.source === "yelp") {
    if (input.cost !== null) {
      return (
        <React.Fragment>
          <li className={`itemDetails ${css.itemDetails}`}>
            Starting at {`$${input.cost}.00`}
          </li>
        </React.Fragment>
      );
    } else {
      if (input.is_free === true) {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>Free</li>
          </React.Fragment>
        );
      }
    }
  }
};

export default setPrice;
