import React from "react";
import css from "./MobileSelector.css";
import { DateParts } from "../../../Date-Parts";
import { SavedDates } from "../../../SavedDates";
import { useState } from "react";

const MobileSelector = () => {
  const [content, setContent] = useState("DateParts");

  return (
    <div className={`selectorWrapper ${css.selectorWrapper}`}>
      <div className={`selectorContent ${css.selectorContent}`}>
        {/* <DateParts></DateParts>
        <SavedDates></SavedDates> */}
        {content === "DateParts" ? (
          <DateParts location="mobileSelector"></DateParts>
        ) : (
          <SavedDates></SavedDates>
        )}
      </div>
      <div className={`selectorHeader ${css.selectorHeader}`}>
        <div
          className={`sectionSelector ${css.sectionSelector}`}
          onClick={() => setContent("DateParts")}
        ></div>
        <div
          className={`sectionSelector ${css.sectionSelector}`}
          onClick={() => setContent("SavedDates")}
        ></div>
      </div>
    </div>
  );
};

export default MobileSelector;
