import React from "react";
import { DateParts } from "../Date-Parts";
import { useSelector } from "react-redux";
import { defineSearchBars } from "./Logic";
import css from "./SearchResults.css";
import { useEffect } from "react";

const SearchResults = () => {
  const searchSelector = useSelector(state => state.resultsReducer);

  useEffect(() => {});
  return (
    <div className={`searchResultsWrapper ${css.searchResultsWrapper}`}>
      <DateParts></DateParts>
      {defineSearchBars(searchSelector)}
    </div>
  );
};

export default SearchResults;
