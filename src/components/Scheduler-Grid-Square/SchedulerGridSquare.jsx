import React from "react";
import css from "./SchedulerGridSquare.css";

const SchedulerGridSquare = ({ children }) => {
  return <div className={`squareWrapper ${css.squareWrapper}`}>{children}</div>;
};

export default React.memo(SchedulerGridSquare);
