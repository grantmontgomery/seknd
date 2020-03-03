import React from "react";
import css from "./Scheduler-Grid-Square.css";

const SchedulerGridSquare = ({ children }) => {
  return <div className={`squareWrapper ${css.squareWrapper}`}>{children}</div>;
};

export default React.memo(SchedulerGridSquare);
