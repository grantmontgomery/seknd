import React from "react";
import css from "./LinksModal.css";

export const LinksModal = ({ handleTap }) => {
  return (
    <div className={`modalDark ${css.modalDark}`} onClick={handleTap}></div>
  );
};
