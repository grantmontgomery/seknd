import React from "react";
import css from "./EndTimePart.css";

const EndTimePart = ({ width }) => {
  return (
    <div
      className={`endTimeWrapper ${css.endTimeWrapper}`}
      style={{ width }}
    ></div>
  );
};

export default EndTimePart;
