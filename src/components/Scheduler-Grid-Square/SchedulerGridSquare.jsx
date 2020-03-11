import React from "react";
import css from "./SchedulerGridSquare.css";
import { useEffect } from "react";
import { useCallback } from "react";

const SchedulerGridSquare = ({ children, index }) => {
  return <div className={`squareWrapper ${css.squareWrapper}`}>{children}</div>;
};

export default React.memo(SchedulerGridSquare);
