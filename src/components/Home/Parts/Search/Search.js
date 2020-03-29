import React, { forwardRef } from "react";
import { Step } from "../Step";
import { SearchBox } from "../../../Search-Box";
import css from "./Search.css";

const Search = (props, ref) => {
  return (
    <div className={`searchWrapper ${css.searchWrapper}`} ref={ref}>
      {/* <Step text="Search"></Step> */}
      <div className={`searchTextWrapper ${css.searchTextWrapper}`}>
        <div className={`searchHeaderWrapper ${css.searchDescriptionWrapper}`}>
          It starts with a Search
        </div>
        <div className={`searchDescriptionWrapper ${css.searchDescriptionWrapper}`}>
          Want to look for 
        </div>
      </div>
      <SearchBox page="home"></SearchBox>
    </div>
  );
};

export default forwardRef(Search);
