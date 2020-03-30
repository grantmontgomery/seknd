import React, { forwardRef } from "react";
import { Step } from "../Step";
import { SearchBox } from "../../../Search-Box";
import css from "./Search.css";

const Search = (props, ref) => {
  return (
    <div className={`searchWrapper ${css.searchWrapper}`} ref={ref}>
      {/* <Step text="Search"></Step> */}
      <div className={`searchAnimationWrapper ${css.searchAnimationWrapper}`}>
        <div className={`searchTextWrapper ${css.searchTextWrapper}`}>
          <div className={`searchHeaderWrapper ${css.searchHeaderWrapper}`}>
            It starts with a Search...
          </div>
          <div
            className={`searchDescriptionWrapper ${css.searchDescriptionWrapper}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus veniam placeat, sit rem possimus odit? Tempora, eos
            quod mollitia magnam recusandae quidem architecto quisquam atque
            deleniti! Quibusdam sed aut repellendus!
          </div>
        </div>

        <SearchBox page="home"></SearchBox>
      </div>
    </div>
  );
};

export default forwardRef(Search);
