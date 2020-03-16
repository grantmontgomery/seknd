import React from "react";
import css from "./RemovePart.css";

const RemovePart = ({ removePart }) => {
  return (
    <div
      className={`removePart ${css.removePart}`}
      // onClick={this.removePart}
    >
      <div className={`xWrapper ${css.xWrapper}`}>X</div>
    </div>
  );
};

export default RemovePart;
