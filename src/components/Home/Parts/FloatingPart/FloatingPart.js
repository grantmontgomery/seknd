import React from "react";
import css from "./FloatingPart.css";

const FloatingPart = ({ image }) => {
  return (
    <div className={`floatingPartWrapper ${css.floatingPartWrapper}`}>
      <img src={`${image}`} alt="" />
    </div>
  );
};

export default FloatingPart;
