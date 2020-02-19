import React, { useEffect } from "react";
import { SearchResultsBar } from "../Search-Results-Bar";
import { SearchResults } from "../Search-Results";
import { SearchBox } from "../Search-Box";
import css from "./Search.css";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  return (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <SearchBox page="search"></SearchBox>

      <SearchResults></SearchResults>
    </div>
  );
};

export default Search;
