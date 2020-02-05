import React from "react";
import { SearchResultsBar } from "../Search-Results-Bar";
import { DateParts } from "../Date-Parts";
import { SearchResultsBarLabel } from "../Search-Results-Bar-Label";
import css from "./SearchResults.css";

const SearchResults = () => {
  return (
    <div className={`searchResultsWrapper ${css.searchResultsWrapper}`}>
      <SearchResultsBarLabel></SearchResultsBarLabel>
      <DateParts></DateParts>
      <SearchResultsBar></SearchResultsBar>
      <SearchResultsBar></SearchResultsBar>
    </div>
  );
};

export default SearchResults;
