import React from "react";
import css from "./RemovePart.css";

<<<<<<< HEAD
const RemovePart = ({ removePart }) => {
  return (
    <div
      className={`removePart ${css.removePart}`}
      // onClick={this.removePart}
    >
=======
const RemovePart = () => {
  return (
    <div className={`removePart ${css.removePart}`}>
>>>>>>> aa36c9de7efa81a8d313ed2f65ffaddcbe7d8789
      <div className={`xWrapper ${css.xWrapper}`}>X</div>
    </div>
  );
};

export default RemovePart;
