const selectCall = (resultsState, inputState) => {
  return {
    type: resultsState,
    payload: inputState
  };
};

const apiActions = { selectCall };

export default apiActions;
