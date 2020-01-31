const selectCall = (input, inputState) => {
  return {
    type: input,
    payload: inputState
  };
};

const apiActions = { selectCall };

export default apiActions;
