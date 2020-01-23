import React from "react";
import { SearchBox } from "../Search-Box";
import css from "./Search.css";

const Search = () => {
  return (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <div className={`sloganWrapper ${css.sloganWrapper}`}>
        <h1>LESS TIME LOOKING,</h1>
        <h1>MORE SECOND DATES</h1>
      </div>
      <div className={`emblemWrapper ${css.emblemWrapper}`}>
        <div className={`emblem ${css.emblem}`}></div>
        <div className={`emblem ${css.emblem}`}></div>
        <div className={`emblem ${css.emblem}`}></div>
      </div>
      <SearchBox></SearchBox>
    </div>
  );
};

export default Search;
