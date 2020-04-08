import React from "react";
import { useSelector } from "react-redux";
import css from "./ScrollPosition.css";

const ScrollPosition = () => {
  const { scrollPosition } = useSelector(
    (state) => state.homeScrollStylesReducer
  );
  const { render, dots } = scrollPosition;
  const { search, select, schedule } = dots;
  return render === true ? (
    <div className={`scrollPositionWrapper ${css.scrollPositionWrapper}`}>
      <div className={`line ${css.line}`}></div>
      <div className={`dotsWrapper ${css.dotsWrapper}`}>
        <div className={`dot ${css.dot}`} style={{ ...search }}></div>
        <div className={`dot ${css.dot}`} style={{ ...select }}></div>
        <div className={`dot ${css.dot}`} style={{ ...schedule }}></div>
      </div>
      <div className={`line ${css.line}`}></div>
    </div>
  ) : null;
};

export default ScrollPosition;
