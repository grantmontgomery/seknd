import React, { useEffect } from "react";
// import { SearchResults } from "../Search-Results";
import { SearchBox } from "../Search-Box";
import css from "./Search.css";
import { DateParts } from "../Date-Parts";
import { SearchResultsBar } from "../Search-Results-Bar";
import { SearchResultsBarLabel } from "../Search-Results-Bar-Label";
import { defineSearchBars } from "./Logic";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const searchSelector = useSelector(state => state.resultsReducer);
  const Events = useSelector(state => state.eventsReducerAPI);
  const Places = useSelector(state => state.placesReducerAPI);

  return (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <SearchBox page="search"></SearchBox>
      <DateParts page="search"></DateParts>
      {defineSearchBars(searchSelector, Events, Places)}
    </div>
  );
};

export default Search;
