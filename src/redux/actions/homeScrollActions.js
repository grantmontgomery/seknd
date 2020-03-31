const homeScrollActions = input => {
  return typeof input === "object"
    ? { type: input.type, payload: input.payload }
    : input;
};

export default homeScrollActions;
