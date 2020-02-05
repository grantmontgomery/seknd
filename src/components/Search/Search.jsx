import React, { useEffect } from "react";
import { SearchResultsBar } from "../Search-Results-Bar";
import { SearchResults } from "../Search-Results";
import css from "./Search.css";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";

const Search = () => {
  return (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <SearchResults></SearchResults>
    </div>
  );
};

export default Search;
