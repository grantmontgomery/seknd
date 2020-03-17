import React from "react";
import css from "./RemovePart.css";

const RemovePart = () => {
  return (
    <div className={`removePart ${css.removePart}`}>
      <div className={`xWrapper ${css.xWrapper}`}>X</div>
    </div>
  );
};

export default RemovePart;
