import React from "react";
import ReactDOM from "react-dom";
import css from "./ColorSelector.css";
import { useState } from "react";
import { useEffect } from "react";
import { CheckMark } from "../CheckMark";

const ColorSelector = ({ handleChange, pageType }) => {
  const colorSelectors = document.getElementsByClassName("colorSelector");

  useEffect(() => {
    ReactDOM.render(<CheckMark pageType={pageType} />, colorSelectors[0]);
  }, []);

  const handleClick = event => {
    changeColor(event);
    handleChange(event);
  };

  const changeColor = ({ target }) => {
    for (let i = 0; i < colorSelectors.length; i++) {
      if (target === colorSelectors[i]) {
        ReactDOM.render(
          <CheckMark pageType={pageType}></CheckMark>,
          colorSelectors[i]
        );
      } else {
        ReactDOM.unmountComponentAtNode(colorSelectors[i]);
      }
    }
  };

  return (
    <div
      className={`colorSelectorWrapper ${
        css.colorSelectorWrapper
      } ${pageType} ${css[`${pageType}`]}`}
    >
      <div className={`colorSelectorTitle ${css.colorSelectorTitle}`}>
        Pick a color
      </div>

      <div className={`colorSelectors ${css.colorSelectors}`}>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="0, 78, 100"
          input="color"
          style={{ background: "rgb(0, 78, 100)" }}
          onClick={handleClick}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="255, 166, 56"
          input="color"
          style={{ background: "rgb(255, 166, 56)" }}
          onClick={handleClick}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="37, 68, 65"
          input="color"
          style={{ background: "rgb(37, 68, 65)" }}
          onClick={handleClick}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="235, 58, 17"
          input="color"
          style={{ background: "rgb(235, 58, 17)" }}
          onClick={handleClick}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="purple"
          value="81, 191, 147"
          input="color"
          style={{ background: "rgb(81, 191, 147)" }}
          onClick={handleClick}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="black"
          value="227, 143, 169"
          input="color"
          style={{ background: "rgb(227, 143, 169)" }}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
};

export default ColorSelector;
