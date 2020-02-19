import React from "react";
import css from "../DatePartsPiece.css";

const setPlacePrice = (source, price) => {
  if (source === "yelp") {
    const priceAmount = price.length;

    const currency = price[0];
    let currencyClass = "";

    if (priceAmount === 1) {
      currencyClass = `oneCurrencies`;
    } else if (priceAmount === 2) {
      currencyClass = "twoCurrencies";
    } else if (priceAmount === 3) {
      currencyClass = "threeCurrencies";
    } else if (priceAmount === 4) {
      currencyClass = "fourCurrencies";
    }
    return (
      <div
        className={`partPlacePrice ${css.partPlacePrice} ${currencyClass} ${
          css[`${currencyClass}`]
        }`}
      >
        <span className={`currencySymbol ${css.currencySymbol}`}>
          {currency}
        </span>
        <span className={`currencySymbol ${css.currencySymbol}`}>
          {currency}
        </span>
        <span className={`currencySymbol ${css.currencySymbol}`}>
          {currency}
        </span>
        <span className={`currencySymbol ${css.currencySymbol}`}>
          {currency}
        </span>
      </div>
    );
  }
};

export default setPlacePrice;
