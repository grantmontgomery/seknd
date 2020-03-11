const dimensionsActions = input => {
  if (typeof input === "object") {
    return { type: input.type, payload: input.payload };
  } else {
    return { type: input };
  }
};

export default dimensionsActions;
