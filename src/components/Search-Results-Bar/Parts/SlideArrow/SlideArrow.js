import React from "react";
import css from "./SlideArrow.css";
import { useState } from "react";
import { useEffect } from "react";

const SlideArrow = ({ action, type }) => {
  let [arrowType, setType] = useState("");

  useEffect(() => {
    type === "events" ? setType("eventSlide") : setType("placeSlide");
  }, [type]);

  return (
    <div
      className={`${action}Wrapper ${css[`${action}Wrapper`]} ${arrowType} ${
        css[`${arrowType}`]
      }`}
    >
      <div className={`arrowWrapper ${css.arrowWrapper}`}>
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
    </div>
  );
};

export default SlideArrow;
