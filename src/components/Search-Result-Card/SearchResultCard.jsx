import React from "react";
import { Logic } from "./Logic";
import css from "./SearchResultCard.css";
import { useEffect } from "react";

const SearchResultCard = ({ type }) => {
  const { setType } = Logic;

  useEffect(() => {
    setType(type);
  }, [type]);

  return (
    <div
      className={`searchResultCardWrapper ${css.searchResultCardWrapper}`}
    ></div>
  );
};

export default SearchResultCard;
