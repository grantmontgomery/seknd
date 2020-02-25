import React from "react";
import css from "./ColorSelector.css";

const ColorSelector = () => {
  return (
    <div className={`colorSelectorWrapper ${css.colorSelectorWrapper}`}>
      <div className={`colorSelectorTitle ${css.colorSelectorTitle}`}>
        Pick a color
      </div>

      <div className={`colorSelectors ${css.colorSelectors}`}>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="red"
          value="(233, 53, 53)"
          style={{ background: "rgb(0, 78, 100)" }}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="orange"
          value="(255, 187, 0)"
          style={{ background: "rgb(255, 166, 56)" }}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="green"
          value="(1, 192, 87)"
          style={{ background: "rgb(37, 68, 65)" }}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="blue"
          value="(0, 162, 255)"
          style={{ background: "rgb(235, 58, 17)" }}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="purple"
          value="(169, 43, 241)"
          style={{ background: "rgb(81, 191, 147)" }}
        ></div>
        <div
          className={`colorSelector ${css.colorSelector}`}
          name="black"
          value="(30, 30, 30)"
          style={{ background: "rgb(227, 143, 169)" }}
        ></div>
        <button className={`createPart ${css.createPart}`}>Add</button>
      </div>
    </div>
  );
};

export default ColorSelector;
