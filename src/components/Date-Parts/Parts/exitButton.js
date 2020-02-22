import React from "react";
import css from "../DateParts.css";

const ExitButton = () => {
  return (
    <React.Fragment>
      <button className={`partsExtendedExit ${css.partsExtendedExit}`}>
        X
      </button>
    </React.Fragment>
  );
};

export default ExitButton;
