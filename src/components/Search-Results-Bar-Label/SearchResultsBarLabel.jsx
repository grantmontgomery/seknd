import React from "react";
import css from "./SearchResultsBarLabel.css";

const SearchResultsBarLabel = () => {
  return (
    <div
      className={`searchResultsBarLabelWrapper ${css.searchResultsBarLabelWrapper}`}
    >
      <div className={`labelTextWrapper ${css.labelTextWrapper}`}>Events</div>
    </div>
  );
};

export default SearchResultsBarLabel;
