import React from "react";
import css from "./SearchResultsBar.css";
import { useEffect, useState } from "react";

const SearchResultsBar = props => {
  const [state, setState] = useState({ class: "" });

  const { type } = props;

  const setType = type => {
    if (type === "events") {
      setState({ class: `eventsClass ${css.eventsClass}` });
    } else {
      setState({ class: `placesCall ${css.placesCall}` });
    }
  };
  useEffect(() => {
    setType(type);
  }, [props]);
  return (
    <div className={`searchResultsBarWrapper ${css.searchResultsBarWrapper}`}>
      <button className={`slideButton ${css.slideButton} ${state.class}`}>
        {"<"}
      </button>
      <button className={`slideButton ${css.slideButton} ${state.class}`}>
        {">"}
      </button>
    </div>
  );
};

export default SearchResultsBar;
