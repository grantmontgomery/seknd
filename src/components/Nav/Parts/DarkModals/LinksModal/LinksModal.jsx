import React from "react";
import css from "./LinksModal.css";

export const LinksModal = ({ handleLinksClose }) => {
  return (
    <div
      className={`modalDark ${css.modalDark}`}
      onClick={handleLinksClose}
    ></div>
  );
};
