import React from "react";
import css from "./MobileSelector.css";
import { DateParts } from "../../../Date-Parts";
import { SavedDates } from "../../../SavedDates";

const MobileSelector = () => {
  return (
    <div className={`selectorWrapper ${css.selectorWrapper}`}>
      <div className={`selectorHeader ${css.selectorHeader}`}></div>
      <div className={`selectorContent ${css.selectorContent}`}></div>
    </div>
  );
};

export default MobileSelector;
