import React, { useState } from "react";
import css from "./NewInput.css";

const NewInput = ({ handleChange, name, location }) => {
  return (
    <div
      className={`newInputWrapper ${css.newInputWrapper} ${location} ${
        css[`${location}`]
      }`}
    >
      <input
        type="text"
        value={name}
        input="name"
        onChange={handleChange}
        placeholder={`${
          location === "navLinks"
            ? "Type out custom ideas."
            : "Another idea? Type it here?"
        }`}
      />
    </div>
  );
};

export default NewInput;
