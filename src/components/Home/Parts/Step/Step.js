import React from "react";
import css from "./Step.css";

const Step = ({ number }) => {
  return (
    <div className={`stepWrapper ${css.stepWrapper}`}>
      <div className={`numberWrapper ${css.numberWrapper}`}>{`${number}`}</div>
    </div>
  );
};

export default Step;
