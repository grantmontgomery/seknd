import React from "react";
import { SearchResultCard } from "../../Search-Result-Card";
import css from "../SearchResultsBar.css";

const renderItems = (items, type) => {
  if (items !== undefined) {
    if (items.length > 0) {
      if (items.includes("LOADING")) {
        return "LOADING";
      } else {
        return items.map(item => {
          return <SearchResultCard item={item} type={type}></SearchResultCard>;
        });
      }
    }
  }
};

export default renderItems;
