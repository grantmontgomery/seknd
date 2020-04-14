import React from "react";
import { useSelector } from "react-redux";
import css from "./ScrollPosition.css";

const ScrollPosition = () => {
  const { scrollPosition, getStarted } = useSelector(
    state => state.homeScrollStylesReducer
  );
  const { render, dots } = scrollPosition;
  const { search, select, schedule } = dots;

  const scrollToView = ({ target }) => {
    const sectionName = target.getAttribute("section");
    const section = document.getElementsByClassName(`${sectionName}`)[0];

    return section.scrollIntoView(true);
  };

  return render === true ? (
    <div className={`scrollPositionWrapper ${css.scrollPositionWrapper}`}>
      <div className={`line ${css.line}`}></div>
      <div className={`dotsWrapper ${css.dotsWrapper}`}>
        <div
          className={`dot ${css.dot}`}
          section="searchScroll"
          style={{ ...search }}
          onClick={scrollToView}
        ></div>
        <div
          className={`dot ${css.dot}`}
          section="selectScroll"
          style={{ ...select }}
          onClick={scrollToView}
        ></div>
        <div
          className={`dot ${css.dot}`}
          section="scheduleScroll"
          style={{ ...schedule }}
          onClick={scrollToView}
        ></div>
      </div>
      <div className={`line ${css.line}`}></div>
    </div>
  ) : null;
};

export default ScrollPosition;
