import React from "react";
import css from "./SchedulerScroll.css";

const SchedulerScroll = ({ scroll }) => {
  return scroll ? (
    <div className={`scrollWrapper ${css.scrollWrapper}`}>
      <div className={`lineBox ${css.lineBox}`}>
        <div className={`line ${css.line} left ${css.left}`}></div>
      </div>
      <div className={`textWrapper ${css.textWrapper}`}>
        <div className={`text ${css.text}`}>Scroll</div>
      </div>
      <div className={`lineBox ${css.lineBox}`}>
        <div className={`line ${css.line} right ${css.right}`}></div>
      </div>
    </div>
  ) : null;
};

export default SchedulerScroll;
