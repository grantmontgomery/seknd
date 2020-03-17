import React from "react";
import css from "./EndTimePart.css";

const EndTimePart = ({ width }) => {
  return (
    <div className={`endTimeWrapper ${css.endTimeWrapper}`}>
      <div className={`endTimeSelector ${css.endTimeSelector}`}></div>
    </div>
  );
};

export default EndTimePart;
