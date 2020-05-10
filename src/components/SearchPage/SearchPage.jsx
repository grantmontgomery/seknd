import React, { useEffect } from "react";
// import { SearchResults } from "../Search-Results";
import { SearchBox } from "../Search-Box";
import css from "./SearchPage.css";
import { DateParts } from "../Date-Parts";
import { SearchResultsBar } from "../Search-Results-Bar";
import { SearchResultsBarLabel } from "../Search-Results-Bar-Label";
import { actions } from "../../redux";
import { useDispatch } from "react-redux";
import { defineSearchBars } from "./Logic";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const searchSelector = useSelector((state) => state.resultsReducer);
  const Events = useSelector((state) => state.eventsReducerAPI);
  const Places = useSelector((state) => state.placesReducerAPI);

  const { navActions } = actions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navActions("NAV_OTHER"));
  }, []);

  return (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <SearchBox page="search"></SearchBox>
      <DateParts location="searchPage"></DateParts>
      {defineSearchBars(searchSelector, Events, Places)}
    </div>
  );
};

export default SearchPage;
