import React, { useState } from "react";
import css from "../DateParts.css";

const NewInput = () => {
  let [newPart, setPart] = useState("");
  return (
    <div className={`newInput ${css.newInput}`}>
      <input
        type="text"
        value={newPart}
        onChange={event => setPart(event.target.value)}
      />
    </div>
  );
};

export default NewInput;
