import React from "react";
import css from "./LengthenPart.css";

const LengthenPart = () => {
  return (
    <div
      className={`lengthenPart ${css.lengthenPart}`}
      // onClick={this.removePart}
    >
      <div className={`xWrapper ${css.xWrapper}`}>X</div>
    </div>
  );
};

export default LengthenPart;
