import React from "react";
import css from "./ScrollPosition.css";

const ScrollPosition = () => {
  return (
    <div className={`scrollPositionWrapper ${css.scrollPositionWrapper}`}>
      <div className={`line ${css.line}`}></div>
      <div className={`dotsWrapper ${css.dotsWrapper}`}>
        <div className={`dot ${css.dot}`}>
          <svg>
            <circle cx="50" cy="50" r="59" fill="black" />
          </svg>
        </div>
        <div className={`dot ${css.dot}`}>
          <svg>
            <circle cx="50" cy="50" r="59" fill="black" />
          </svg>
        </div>
        <div className={`dot ${css.dot}`}>
          <svg>
            <circle cx="50" cy="50" r="59" fill="black" />
          </svg>
        </div>
      </div>
      <div className={`line ${css.line}`}></div>
    </div>
  );
};

export default ScrollPosition;
