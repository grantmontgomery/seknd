import React from "react";
import css from "../SearchResultsBar.css";

const slideArrow = state => {
  return (
    <button className={`slideButton ${css.slideButton} ${state.class}`}>
      <div className={`arrowWrapper ${css.arrowWraper}`}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.3 55.54"
          className={`arrow ${css.arrow}`}
        >
          <title>Asset 6</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Tracing">
              <polygon points="3.54 55.53 0 52 24.23 27.77 0 3.54 3.54 0 31.3 27.77 3.54 55.53" />
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
};

export default slideArrow;
