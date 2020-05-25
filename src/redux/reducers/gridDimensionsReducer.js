const gridDimensionsReducer = (
  state = {
    desktop: { width: "", gridTemplateAreas: "", gridTemplateColumns: "" },
    mobile: { width: "", gridTemplateAreas: "", gridTemplateColumns: "" },
  },
  action
) => {
  switch (action.type) {
    case "ADD_DIMENSIONS":
      return { ...action.payload };
    case "CLEAR_DIMENSIONS":
      return {
        desktop: { width: "", gridTemplateAreas: "", gridTemplateColumns: "" },
        mobile: { width: "", gridTemplateAreas: "", gridTemplateColumns: "" },
      };
    default:
      return state;
  }
};

export default gridDimensionsReducer;
