import React from "react";
import css from "./SearchResultsBar.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logic } from "./Logic";
import { SlideArrow } from "./Parts";

const SearchResultsBar = props => {
  const [state, setState] = useState({ class: "" });
  let [index, changeIndex] = useState(0);
  const { renderItems } = Logic;

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
      <SlideArrow></SlideArrow>
      <div className={`searchResultsBarSlider ${css.searchResultsBarSlider}`}>
        <div className={`searchResultsBarHolder ${css.searchResultsBarHolder}`}>
          {loadingSpinner()}
          {renderItems(items)}
        </div>
      </div>
      <SlideArrow></SlideArrow>
    </div>
  );
};

export default SearchResultsBar;
