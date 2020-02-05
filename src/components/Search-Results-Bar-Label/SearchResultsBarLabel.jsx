import React from "react";
import css from "./SearchResultsBarLabel.css";
import { useState } from "react";
import { useEffect } from "react";

const SearchResultsBarLabel = props => {
  const [state, setState] = useState({ class: "", name: "" });

  const { type } = props;

  const setType = type => {
    if (type === "events") {
      setState({ class: `eventsClass ${css.eventsClass}`, name: "Events" });
    } else {
      setState({ class: `placesClass ${css.placesClass}`, name: "Places" });
    }
  };

  useEffect(() => {
    setType(type);
  }, [props]);

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
