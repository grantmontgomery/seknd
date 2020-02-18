import React from "react";
import css from "../DatePartsPiece.css";

const ThreeDots = () => {
  return (
    <svg
      className={`threeDots ${css.threeDots}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 80"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Tracing">
          <circle cx="40" cy="40" r="40" />
          <circle cx="160" cy="40" r="40" />
          <circle cx="280" cy="40" r="40" />
        </g>
      </g>
    </svg>
  );
};

export default ThreeDots;
