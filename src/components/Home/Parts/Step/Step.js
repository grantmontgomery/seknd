import React from "react";
import css from "./Step.css";

const Step = ({ number, text }) => {
  return (
    <div className={`stepWrapper ${css.stepWrapper}`}>
      <div className={`textWrapper ${css.textWrapper}`}>{`${text}`}</div>
    </div>
  );
};

export default Step;
