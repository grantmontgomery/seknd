import React from "react";
import css from "../SearchResultCard.css";

const setEventPrice = item => {
  if (item.source === "ticketmaster") {
    if ("priceRanges" in item) {
      if (item.priceRanges[0].currency === "USD") {
        let parsedEventPrice =
          Number.isInteger(item.priceRanges[0].min) ||
          item.priceRanges[0].min % 1 === 0
            ? ` $${item.priceRanges[0].min}.00`
            : item.priceRanges[0].min.toString().split(".")[1].length < 2
            ? ` $${item.priceRanges[0].min}0`
            : ` $${item.priceRanges[0].min}`;

        item.parsedEventPrice = parsedEventPrice;

        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              <span>Starting at</span>
              <a
                href={item.url}
                target="_blank"
                className={`eventPrice ${css.eventPrice}`}
              >
                {parsedEventPrice}
              </a>
            </li>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <li className={`itemDetails ${css.itemDetails}`}>
            <a
              href={item.url}
              targer="_blank"
              className={`eventPrice ${css.eventPrice}`}
            >
              Click here for pricing
            </a>
          </li>
        </React.Fragment>
      );
    }
  } else if (item.source === "yelp") {
    if (item.cost !== null) {
      if (item.cost !== 0) {
        let parsedEventPrice =
          Number.isInteger(item.cost) || item.cost % 1 === 0
            ? ` $${item.cost}.00`
            : item.cost.toString().split(".")[1].length < 2
            ? ` $${item.cost}0`
            : `$${item.cost}`;

        item.parsedEventPrice = parsedEventPrice;
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              <span>Starting at </span>
              <a
                href={item.event_site_url}
                targer="_blank"
                className={`eventPrice ${css.eventPrice}`}
              >
                {parsedEventPrice}
              </a>
            </li>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              <a
                href={item.event_site_url}
                targer="_blank"
                className={`eventPrice ${css.eventPrice}`}
              >
                Click here for pricing
              </a>
            </li>
          </React.Fragment>
        );
      }
    } else {
      if (item.is_free === true) {
        item.parsedEventPrice = "Free";
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              <span className={`eventPrice ${css.eventPrice}`}>Free</span>
            </li>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <li className={`itemDetails ${css.itemDetails}`}>
              <a
                href={item.event_site_url}
                className={`eventPrice ${css.eventPrice}`}
                target="_blank"
              >
                Click here for pricing
              </a>
            </li>
          </React.Fragment>
        );
      }
    }
  }
};

export default setEventPrice;
