import React from "react";
import css from "./FloatingPart.css";

const FloatingPart = ({ image, hover }) => {
  console.log(hover);
  const transformStyle = () => {
    return {
      transform: `rotateX(30deg) rotateY(25deg) ${
        hover ? "translateY(-10px)" : "translateY(0)"
      }`
    };
  };
  return (
    <div
      className={`floatingPartWrapper ${css.floatingPartWrapper}`}
      style={{ ...transformStyle() }}
    >
      <img src={`${image}`} alt="" />
    </div>
  );
};

export default FloatingPart;
