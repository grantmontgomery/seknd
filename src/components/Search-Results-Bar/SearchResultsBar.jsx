import React from "react";
import css from "./SearchResultsBar.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logic } from "./Logic";
import { Parts } from "./Parts";

const SearchResultsBar = props => {
  const [state, setState] = useState({ class: "" });
  let [index, changeIndex] = useState(0);
  const { renderItems } = Logic;
  const { slideArrow } = Parts;

  const { type, content } = props;
  const { items } = content;

  const loadingSpinner = () => {
    if (content.loading) {
      return <React.Fragment>Loading...</React.Fragment>;
    }
  };

  const setType = type => {
    if (type === "events") {
      setState({
        class: `eventsClass ${css.eventsClass}`
      });
    } else {
      setState({
        class: `placesClass ${css.placesClass}`
      });
    }
  };

  useEffect(() => {
    setType(type);
    changeIndex((index = 0));
  }, [props]);

  return (
    <div className={`searchResultsBarWrapper ${css.searchResultsBarWrapper}`}>
      <div className={`searchResultsBarSlider ${css.searchResultsBarSlider}`}>
        <div className={`searchResultsBarHolder ${css.searchResultsBarHolder}`}>
          {loadingSpinner()}
          {renderItems(items)}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsBar;
