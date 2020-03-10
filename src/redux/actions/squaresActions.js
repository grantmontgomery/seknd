const squaresActions = input => {
  if (typeof input === "object") {
    console.log(input);
    return { ...input };
  } else {
    return { type: input };
  }
};

export default squaresActions;
