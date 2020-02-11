import React from "react";
import { SearchResultCard } from "../../Search-Result-Card";
import { useSelector } from "react-redux";
import css from "../SearchResultsBar.css";

const renderItems = items => {
  if (items !== undefined) {
    if (items.length > 0) {
      if (items.includes("LOADING")) {
        return "LOADING";
      } else {
        return items.map(item => {
          return (
            <SearchResultCard key={item.id} item={item}></SearchResultCard>
          );
        });
      }
    }
  }
};

export default renderItems;
