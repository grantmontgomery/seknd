import React, { useState } from "react";
import css from "./NewInput.css";

const NewInput = ({ handleChange, name, location }) => {
  return (
    <div className={`newInputWrapper ${css.newInputWrapper}`}>
      <input
        type="text"
        value={name}
        input="name"
        onChange={handleChange}
        placeholder="Another idea? Type it here."
      />
    </div>
  );
};

export default NewInput;
