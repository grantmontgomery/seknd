import React from "react";
import { SearchResultCard } from "../../Search-Result-Card";
import { SekndLoader } from "../../SekndLoader";
import { useSelector } from "react-redux";
import css from "../SearchResultsBar.css";

const renderItems = (items, loading) => {
  if (loading) {
    return <SekndLoader></SekndLoader>;
  } else {
    return items.length > 0
      ? items.map((item) => (
          <SearchResultCard key={item.id} item={item}></SearchResultCard>
        ))
      : null;
  }
};

export default renderItems;
