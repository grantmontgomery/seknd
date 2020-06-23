import React from "react";
import { useSelector } from "react-redux";
import { GetStarted } from "../GetStarted";
import css from "./ScrollPosition.css";

const ScrollPosition = () => {
  const {
    desktop: { scrollPosition, getStarted },
  } = useSelector((state) => state.homeScrollStylesReducer);
  const { render, dots } = scrollPosition;
  const { search, select, schedule } = dots;

  const scrollToView = ({ target }) => {
    const sectionName = target.getAttribute("section");
    const section = document.getElementsByClassName(`${sectionName}`)[0];

    return section.scrollIntoView(true);
  };

  const scrollEnd = () => {
    return getStarted.render === true ? (
      <GetStarted></GetStarted>
    ) : (
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
    );
  };

  return render === true ? (
    <div className={`scrollPositionWrapper ${css.scrollPositionWrapper}`}>
      <div className={`line ${css.line}`}></div>
      {scrollEnd()}
      <div className={`line ${css.line}`}></div>
    </div>
  ) : null;
};

export default ScrollPosition;
