import React, { forwardRef } from "react";
import { Step } from "../Step";
import { SearchBox } from "../../../Search-Box";
import css from "./Search.css";
import { useSelector } from "react-redux";

const Search = ({ render }) => {
  const { search, searchText, searchBox } = useSelector(
    (state) => state.homeScrollStylesReducer
  );
  return render === true ? (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <div
        className={`searchTextWrapper ${css.searchTextWrapper}`}
        style={{ ...searchText }}
      >
        <div className={`searchHeaderWrapper ${css.searchHeaderWrapper}`}>
          Start with a Search...
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

      {/* <SearchBox page="home"></SearchBox> */}
    </div>
  ) : null;
};

export default forwardRef(Search);
