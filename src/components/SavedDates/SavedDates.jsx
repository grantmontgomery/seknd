import React from "react";
import css from "./SavedDates.css";

const SavedDates = () => {
  return (
    <div className={`savedWrapper ${css.savedWrapper}`}>
      <div className={`headerWrapper ${css.headerWrapper}`}></div>
      <div className={`datesWrapper ${css.datesWrapper}`}></div>
    </div>
  );
};

export default SavedDates;
