import React from "react";
import css from "../DateParts.css";

const exitButton = shape => {
  if (shape === "partsExtended") {
    return (
      <React.Fragment>
        <button className={`partsExtendedExit ${css.partsExtendedExit}`}>
          X
        </button>
      </React.Fragment>
    );
  }
};

export default exitButton;
