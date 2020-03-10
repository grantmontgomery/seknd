const squaresActions = input => {
  if (typeof input === "object") {
    const { type, payload } = input;
    return { type, payload };
  } else {
    return { type: input };
  }
};

export default squaresActions;
