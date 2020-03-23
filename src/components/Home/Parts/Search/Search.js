import React from "react";
import { Step } from "../Step";
import { SearchBox } from "../../../Search-Box";
import css from "./Search.css";

const Search = () => {
  return (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <Step text="Search"></Step>
      <SearchBox page="home"></SearchBox>
    </div>
  );
};

export default Search;
