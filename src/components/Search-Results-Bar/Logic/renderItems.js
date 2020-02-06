import React from "react";
import { SearchResultCard } from "../../Search-Result-Card";
import css from "../SearchResultsBar.css";

const renderItems = items => {
  if (items !== undefined) {
    if (items.length > 0) {
      if (items.includes("LOADING")) {
        return "LOADING";
      } else {
        return items.map(item => {
          return <SearchResultCard item={item}></SearchResultCard>;
        });
      }
    }
  }
};

export default renderItems;
