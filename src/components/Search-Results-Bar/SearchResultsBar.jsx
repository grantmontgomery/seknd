import React from "react";
import css from "./SearchResultsBar.css";
import { SearchResultCard } from "../Search-Result-Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logic } from "./Logic";
import { Parts } from "./Parts";

const SearchResultsBar = props => {
  const [state, setState] = useState({ class: "", items: [], index: 0 });
  const { renderItems } = Logic;
  const { slideArrow } = Parts;

  const { type } = props;

  const Events = useSelector(state => state.eventsReducerAPI);
  const Places = useSelector(state => state.placesReducerAPI);

  const setType = type => {
    if (type === "events") {
      setState({
        items: [...Events.items],
        class: `eventsClass ${css.eventsClass}`
      });
    } else {
      setState({
        itesm: [...Places.items],
        class: `placesClass ${css.placesClass}`
      });
    }
  };

  useEffect(() => {
    setType(type);
  }, [props]);

  const { items, index } = state;

  return (
    <div className={`searchResultsBarWrapper ${css.searchResultsBarWrapper}`}>
      <div className={`searchResultsBarSlider ${css.searchResultsBarSlider}`}>
        <div className={`searchResultsBarHolder ${css.searchResultsBarHolder}`}>
          {renderItems(items, type)}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsBar;
