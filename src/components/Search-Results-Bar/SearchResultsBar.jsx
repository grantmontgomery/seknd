import React from "react";
import css from "./SearchResultsBar.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logic } from "./Logic";
import { SlideArrow } from "./Parts";

const SearchResultsBar = ({ type, content }) => {
  const [state, setState] = useState({ class: "" });
  let [index, changeIndex] = useState(0);
  const { renderItems } = Logic;

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

  const renderResults = () => {
    if (items.length > 0) {
      return (
        <div className={`searchResultsBarSlider ${css.searchResultsBarSlider}`}>
          <SlideArrow type={type}></SlideArrow>

          <div
            className={`searchResultsBarHolder ${css.searchResultsBarHolder}`}
          >
            {renderItems(items)}
          </div>
          <SlideArrow type={type}></SlideArrow>
        </div>
      );
    }
  };

  useEffect(() => {
    setType(type);
    changeIndex((index = 0));
  }, [type]);

  return (
    <div
      className={`searchResultsBarWrapper ${
        css.searchResultsBarWrapper
      } ${type} ${css[`${type}`]}`}
    >
      <SlideArrow type={type}></SlideArrow>

      <div className={`searchResultsBarSlider ${css.searchResultsBarSlider}`}>
        <div className={`searchResultsBarHolder ${css.searchResultsBarHolder}`}>
          {loadingSpinner()}
          {renderItems(items)}
        </div>
      </div>
      <SlideArrow type={type}></SlideArrow>
    </div>
    // <div
    //   className={`searchResultsBarWrapper ${
    //     css.searchResultsBarWrapper
    //   } ${type} ${css[`${type}`]}`}
    // >
    //   {() => {
    //     return items.loading ? loadingSpinner() : renderResults();
    //   }}
    // </div>
  );
};

export default SearchResultsBar;
