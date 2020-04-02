import React from "react";
import css from "./FloatingPart.css";

const FloatingPart = ({ image, position }) => {
  return (
    <div
      className={`floatingPartWrapper ${css.floatingPartWrapper}`}
      style={{ ...position }}
    >
      <img src={`${image}`} alt="" />
    </div>
  );
};

export default FloatingPart;
