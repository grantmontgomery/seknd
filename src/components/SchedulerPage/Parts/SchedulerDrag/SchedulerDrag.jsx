import React from "react";
import css from "./SchedulerDrag.css";

const SchedulerDrag = ({ drag }) => {
  return drag ? (
    <div className={`dragWrapper ${css.dragWrapper}`}>
      <div className={`textWrapper ${css.textWrapper}`}>
        <div className={`text ${css.text}`}>Drag</div>
      </div>
      <div className={`lineWrapper ${css.lineWrapper}`}>
        <div className={`line ${css.line}`}></div>
      </div>
    </div>
  ) : null;
};

export default SchedulerDrag;
