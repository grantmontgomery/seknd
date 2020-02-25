import React, { useState } from "react";
import css from "./NewInput.css";

const NewInput = () => {
  let [newPart, setPart] = useState("");
  return (
    <div className={`newInputWrapper ${css.newInputWrapper}`}>
      <input
        type="text"
        value={newPart}
        onChange={event => setPart(event.target.value)}
        placeholder="Another idea? Type it here."
      />
    </div>
  );
};

export default NewInput;
