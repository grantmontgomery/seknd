import React from "react";
import css from "../SearchResultCard.css";

// Have to set if there is no price provided in incoming data.

const setPrice = input => {
  if (input.source === "ticketmaster") {
    if ("priceRanges" in input) {
      if (input.priceRanges[0].currency === "USD") {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
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
    } else {
      return (
        <React.Fragment>
          <li className={`itemDetails ${css.itemDetails}`}>
            <a href={input.url} targer="_blank">
              Click here for pricing
            </a>
          </li>
        </React.Fragment>
      );
    }
  } else if (input.source === "yelp") {
    if (input.cost !== null) {
      if (input.cost !== 0) {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              Starting at {`$${input.cost}.00`}
            </li>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              <a href={input.event_site_url} targer="_blank">
                Click here for pricing
              </a>
            </li>
          </React.Fragment>
        );
      }
    } else {
      if (input.is_free === true) {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>Free</li>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              <a href={input.event_site_url} targer="_blank">
                Click here for pricing
              </a>
            </li>
          </React.Fragment>
        );
      }
    }
  }
};

export default setPrice;
