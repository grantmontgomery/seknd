const accountActions = (input) => {
  const { type } = input;
  return typeof input === "object" ? input : { type };
};

export default accountActions;
