import React from "react";
import { SearchResultCard } from "../../Search-Result-Card";
import { SekndLoader } from "../../SekndLoader";
import { useSelector } from "react-redux";
import css from "../SearchResultsBar.css";

const renderItems = (items, loading) => {
  // if (items !== undefined) {
  //   if (items.length > 0) {
  //     if (items.includes("LOADING")) {
  //       return <SekndLoader></SekndLoader>;
  //     } else {
  //       return items.map((item) => {
  //         return (
  //           <SearchResultCard key={item.id} item={item}></SearchResultCard>
  //         );
  //       });
  //     }
  //   }
  // }

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
