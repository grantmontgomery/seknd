import React, { useState } from "react";

const PartButton = () => {
  const [state, setState] = useState({
    input: "+"
  });

  const changeButton = () => {};

  const { input } = state;
  return (
    <React.Fragment>
      <button>{input}</button>
    </React.Fragment>
  );
};

export default PartButton;
