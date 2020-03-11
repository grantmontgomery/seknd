const hoursActions = input => {
  if (typeof input === "object") {
    return { ...input };
  } else {
    return { type: input };
  }
};

export default hoursActions;
