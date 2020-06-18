import React from "react";
import css from "./PartsModal.css";

export const PartsModal = ({ handlePartsClose }) => {
  return (
    <div
      className={`modalDark ${css.modalDark}`}
      onClick={handlePartsClose}
    ></div>
  );
};
