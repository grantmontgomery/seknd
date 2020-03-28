import React, { forwardRef } from "react";
import { Step } from "../Step";
import { SearchBox } from "../../../Search-Box";
import css from "./Search.css";

const Search = (props, ref) => {
  return (
    <div className={`searchWrapper ${css.searchWrapper}`} ref={ref}>
      {/* <Step text="Search"></Step> */}
      <div className={`searchTextWrapper ${css.searchTextWrapper}`}>
        It starts with a Search
      </div>
      <SearchBox page="home"></SearchBox>
    </div>
  );
};

export default forwardRef(Search);
