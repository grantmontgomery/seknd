import React from "react";
import css from "../SearchResultCard.css";

const setPlacePrice = item => {
  if (item.source === "yelp") {
    if ("price" in item) {
      const priceAmount = item.price.length;

      const currency = item.price[0];
      //   const currencyClass = `${priceAmount}currencies`;
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

      console.log(priceAmount);
      console.log(currency);
      console.log(currencyClass);

      return (
        <li
          className={`itemDetails ${css.itemDetails} ${currencyClass} ${
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
        </li>
      );
    }
  }
};

export default setPlacePrice;
