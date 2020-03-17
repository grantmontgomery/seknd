import React from "react";
import css from "./LengthenPart.css";

const LengthenPart = ({ rotateArrow }) => {
  console.log(rotateArrow);
  return (
    <div className={`lengthenWrapper ${css.lengthenWrapper}`}>
      <div className={`oWrapper ${css.oWrapper}`}>O</div>
    </div>
  );
};

export default LengthenPart;
