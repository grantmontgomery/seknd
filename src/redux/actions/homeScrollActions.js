const homeScrollActions = input => {
  return typeof input === "object"
    ? { type: input.type, payload: { ...input.payload } }
    : { type: input };
};

export default homeScrollActions;
