import React from "react";
import css from "./SlideArrow.css";
import { useState } from "react";
import { useEffect } from "react";

const SlideArrow = ({ action, type, hover, handleIndex, index }) => {
  let [arrowType, setType] = useState("");

  useEffect(() => {
    type === "events" ? setType("eventSlide") : setType("placeSlide");
  }, [type]);

  const handleClick = event => {
    event.preventDefault();
    if (action === "previous") {
      handleIndex("decrease");
    } else {
      handleIndex("increase");
    }
  };

  const isHovering = (hover, index, action) => {
    if (action === "previous" && hover) {
      return index > 0 ? `${css["appear"]}` : "";
    } else if (hover) {
      return `${css["appear"]}`;
    }
  };
  return (
    <div
      className={`${action}Wrapper ${css[`${action}Wrapper`]} ${arrowType} ${
        css[`${arrowType}`]
      } ${isHovering(hover, index, action)}`}
      onClick={handleClick}
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
