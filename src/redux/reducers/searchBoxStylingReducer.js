const searchBoxStylingReducer = (state = { opacity: "0" }, action) => {
  switch (action.type) {
    case "SEARCH_OPACITY":
      return { ...state, opacity: `${action.payload}` };
    default:
      return state;
  }
};

export default searchBoxStylingReducer;
