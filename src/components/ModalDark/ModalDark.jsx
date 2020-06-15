import * as React from "react";
import css from "./ModalDark.css";

export const ModalDark = ({ component, display }) => {
  return (
    <div
      className={`modalDark ${component} ${css[`${component}`]}`}
      style={{ display: `${display}` }}
    ></div>
  );
};
