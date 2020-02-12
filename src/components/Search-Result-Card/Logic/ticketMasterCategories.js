import React from "react";
import css from "../SearchResultCard.css";

const ticketMasterCategories = item => {
  if ("classifications" in item) {
    let segment = "";
    let genre = "";
    if ("segment" in item.classifications[0]) {
      segment = item.classifications[0].segment.name;
    }
    if ("genre" in item.classifications[0]) {
      genre = item.classifications[0].genre.name;
    }

    return (
      <li className={`itemDetails ${css.itemDetails}`}>
        {`${segment} ${genre}`}
      </li>
    );
  }
};

export default ticketMasterCategories;
