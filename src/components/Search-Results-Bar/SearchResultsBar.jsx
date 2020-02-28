import React from "react";
import css from "./SearchResultsBar.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logic } from "./Logic";
import { SlideArrow } from "./Parts";
import { useCallback } from "react";

const SearchResultsBar = ({ type, content }) => {
  const [state, setState] = useState({ class: "", hover: false });
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

  const handleIndex = action => {
    if (action === "increase" && items.length > 0) {
      index + 3 <= items.length
        ? changeIndex((index += 3))
        : changeIndex(items.length - 6);
    } else if (action === "decrease" && index > 0 && items.length > 0) {
      index > 0 ? changeIndex((index -= 3)) : changeIndex(0);
    }
    console.log(index * (100 / items.length));
  };

  // const handleIndex = useCallback(
  //   action => {
  //     if (action === "increase" && items.length > 0) {
  //       index + 3 <= items.length
  //         ? changeIndex((index += 3))
  //         : changeIndex(items.length - 6);
  //     } else if (action === "decrease" && index > 0 && items.length > 0) {
  //       index > 0 ? changeIndex((index -= 3)) : changeIndex(0);
  //     }
  //     console.log(index * (100 / items.length));
  //   },

  //   [items.length]
  // );

  useEffect(() => {
    setType(type);
    changeIndex((index = 0));
  }, [type]);

  const { hover } = state;

  return (
    <div
      className={`searchResultsBarWrapper ${
        css.searchResultsBarWrapper
      } ${type} ${css[`${type}`]}`}
      onMouseEnter={() => setState(state => ({ ...state, hover: true }))}
      onMouseLeave={() => setState(state => ({ ...state, hover: false }))}
    >
      <div className={`searchResultsBarSlider ${css.searchResultsBarSlider}`}>
        <SlideArrow
          index={index}
          hover={hover}
          action="previous"
          type={type}
          handleIndex={handleIndex}
        ></SlideArrow>
        <div
          className={`searchResultsBarHolder ${css.searchResultsBarHolder}`}
          style={{
            transform: `translateX(-${index * (100 / items.length)}%)`
          }}
        >
          {loadingSpinner()}
          {renderItems(items)}
        </div>
        <SlideArrow
          index={index}
          hover={hover}
          action="next"
          type={type}
          handleIndex={handleIndex}
        ></SlideArrow>
      </div>
    </div>
  );
};

export default SearchResultsBar;
