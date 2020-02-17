import React from "react";
import Logic from "./Logic";
import css from "../SearchResultCard.css";

const checkYelpVenue = ({ business_id }) => {
  const { parseYelpData, limitVenue } = Logic;
  if (business_id !== null) {
    return (
      <li className={`itemDetails ${css.itemDetails}`}>
        {limitVenue(parseYelpData(business_id))}
      </li>
    );
  }
};

export default checkYelpVenue;
