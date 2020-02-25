import React, { useState } from "react";
import css from "./NewInput.css";

const NewInput = ({ handleChange, name }) => {
  return (
    <div className={`newInputWrapper ${css.newInputWrapper}`}>
      <input
        type="text"
        value={name}
        input="name"
        onChange={event => handleChange(event)}
        placeholder="Another idea? Type it here."
      />
    </div>
  );
};

export default NewInput;
