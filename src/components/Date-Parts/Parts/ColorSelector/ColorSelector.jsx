import React from "react";
import css from "./ColorSelector.css";

const ColorSelector = ({ handleChange }) => {
  return (
    <div className={`colorSelectorWrapper ${css.colorSelectorWrapper}`}>
      <div className={`colorSelectorTitle ${css.colorSelectorTitle}`}>
        Pick a color
      </div>

      <div className={`colorSelectors ${css.colorSelectors}`}>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="rgb(0, 78, 100)"
          input="color"
          style={{ background: "rgb(0, 78, 100)" }}
          onClick={event => handleChange(event)}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="rgb(255, 166, 56)"
          input="color"
          style={{ background: "rgb(255, 166, 56)" }}
          onClick={event => handleChange(event)}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="rgb(37, 68, 65)"
          input="color"
          style={{ background: "rgb(37, 68, 65)" }}
          onClick={event => handleChange(event)}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          value="rgb(235, 58, 17)"
          input="color"
          style={{ background: "rgb(235, 58, 17)" }}
          onClick={event => handleChange(event)}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="purple"
          value="rgb(81, 191, 147)"
          input="color"
          style={{ background: "rgb(81, 191, 147)" }}
          onClick={event => handleChange(event)}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="black"
          value="rgb(227, 143, 169)"
          input="color"
          style={{ background: "rgb(227, 143, 169)" }}
          onClick={event => handleChange(event)}
        ></div>
        {/* <button className={`createPart ${css.createPart}`}>Add</button> */}
      </div>
    </div>
  );
};

export default ColorSelector;
