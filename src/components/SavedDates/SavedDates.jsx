import React from "react";
import { useSelctor, useSelector } from "react-redux";
import css from "./SavedDates.css";

const SavedDates = () => {
  const { parts } = useSelector((state) => state.datePartsReducer);
  return (
    <div className={`savedWrapper ${css.savedWrapper}`}>
      <div className={`headerWrapper ${css.headerWrapper}`}>
        <div className={`accountWrapper ${css.accountWrapper}`}>
          <div className={`accountText ${css.accountText}`}>Account</div>
        </div>
        <div className={`selectorWrapper ${css.selectorWrapper}`}>
          <div className={`selectorTextWrapper ${css.selectorTextWrapper}`}>
            <div className={`selectorText ${css.selectorText}`}>Current</div>
          </div>
          <div className={`selectorTextWrapper ${css.selectorTextWrapper}`}>
            <div className={`selectorText ${css.selectorText}`}>Saved</div>
          </div>
        </div>
      </div>
      <div className={`datesWrapper ${css.datesWrapper}`}>
        <div className={`datesInner ${css.datesInner}`}></div>
      </div>
    </div>
  );
};

export default SavedDates;
