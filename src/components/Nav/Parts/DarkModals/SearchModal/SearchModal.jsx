import React from "react";
import css from "./SearchModal.css";

export const SearchModal = ({ handleSearchClose }) => {
  return (
    <div
      className={`modalDark ${css.modalDark}`}
      onClick={handleSearchClose}
    ></div>
  );
};
