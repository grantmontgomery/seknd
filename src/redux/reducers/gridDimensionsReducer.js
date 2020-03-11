const gridDimensionsReducer = (
  state = { width: "", gridTemplateAreas: "", gridTemplateColumns: "" },
  action
) => {
  switch (action.type) {
    case "ADD_DIMENSIONS":
      return { ...action.payload };
    case "CLEAR_DIMENSIONS":
      return { width: "", gridTemplateAreas: "", gridTemplateColumns: "" };
    default:
      return state;
  }
};

export default gridDimensionsReducer;
