import React from "react";
import { Logic } from "./Logic";
import css from "./SearchResultCard.css";
import { useEffect } from "react";
import { useState } from "react";

const SearchResultCard = ({ type, item }) => {
  const { cardType } = Logic;

  return (
    <div className={`searchResultCardWrapper ${css.searchResultCardWrapper}`}>
      {cardType(type, item)}
    </div>
  );
};

export default SearchResultCard;
