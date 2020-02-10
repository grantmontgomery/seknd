import React, { useState } from "react";
import css from "./DateParts.css";

const DateParts = () => {
  const [state, setState] = useState({ shape: "circle" });
  const { shape } = state;

  const changeShape = event => {
    event.preventDefault();
    const { target } = event;
    const button = target.className;
    if (shape === "circle") {
      setState({ shape: "extended" });
    } else if (
      shape === "extended" &&
      button.indexOf("partsExtendedExit") !== -1
    ) {
      setState({ shape: "circle" });
    }
  };

  const setShape = () => {
    if (shape === "circle") {
      return `partsCircle ${css.partsCircle}`;
    } else {
      return `partsExtended ${css.partsExtended}`;
    }
  };

  const exitButton = () => {
    if (shape === "extended") {
      return (
        <React.Fragment>
          <button className={`partsExtendedExit ${css.partsExtendedExit}`}>
            X
          </button>
        </React.Fragment>
      );
    }
  };

  return (
    <div
      className={`datePartsWrapper ${css.datePartsWrapper} ${setShape()}`}
      onClick={changeShape}
    >
      {exitButton()}
    </div>
  );
};

export default DateParts;
