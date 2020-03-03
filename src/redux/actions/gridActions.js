const gridActions = action => {
  if (typeof action === "string") {
    return {
      type: action
    };
  } else {
    return {
      type: action.type,
      payload: action.payload
    };
  }
};

export default gridActions;
