import React, { useState } from "react";
import css from "../SearchResultCard.css";
import { useEffect } from "react";

const PartButton = ({ inParts }) => {
  const [state, setState] = useState({
    input: "+"
  });

  useEffect(() => {
    if (!inParts) {
      setState(state => ({ ...state, input: "+" }));
    } else {
      setState(state => ({ ...state, input: "-" }));
    }
  }, []);

  const { input } = state;
  return (
    <React.Fragment>
      <button className={`partButton ${css.partButton}`}>{input}</button>
    </React.Fragment>
  );
};

export default PartButton;
