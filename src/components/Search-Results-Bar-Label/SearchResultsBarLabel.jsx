import React from "react";
import css from "./SearchResultsBarLabel.css";
import { useState } from "react";
import { useEffect } from "react";

const SearchResultsBarLabel = ({ type }) => {
  const [state, setState] = useState({ class: "", name: "" });

  const setType = type => {
    if (type === "events") {
      setState({ class: `eventsClass ${css.eventsClass}`, name: "Events" });
    } else {
      setState({ class: `placesClass ${css.placesClass}`, name: "Places" });
    }
  };

  useEffect(() => {
    setType(type);
  }, [type]);

  return (
    <div
      className={`searchResultsBarLabelWrapper ${css.searchResultsBarLabelWrapper} ${state.class}`}
    >
      <div className={`labelTextWrapper ${css.labelTextWrapper}`}>
        {state.name}
      </div>
    </div>
  );
};

export default SearchResultsBarLabel;
