import React from "react";
import { Logic } from "./Logic";
import css from "./SearchResultCard.css";
import { useEffect } from "react";
import { useState } from "react";

const SearchResultCard = ({ item }) => {
  const { cardType } = Logic;
  return (
    <div className={`searchResultCardWrapper ${css.searchResultCardWrapper}`}>
      {cardType(item)}
    </div>
  );
};

export default SearchResultCard;
