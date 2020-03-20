import React from "react";
import css from "./FloatingPart.css";

const FloatingPart = ({ image, hover, rotation, position, filter }) => {
  console.log(hover);
  const transformStyle = () => {
    return {
      transform: `${rotation} ${hover ? "translateY(-10px)" : "translateY(0)"}`
    };
  };
  return (
    <div
      className={`floatingPartWrapper ${css.floatingPartWrapper}`}
      style={{ ...transformStyle(), ...position, filter }}
    >
      <img src={`${image}`} alt="" />
    </div>
  );
};

export default FloatingPart;
