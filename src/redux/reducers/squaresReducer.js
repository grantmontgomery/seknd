const squaresReducer = (state = { hours: [], squares: [] }, action) => {
  switch (action.type) {
    case "ADD_SQUARES_LOGIC":
      return { ...state, squares: action.payload };
    case "ADD_HOURS_LOGIC":
      return { ...state, hours: action.payload };
    case "CLEAR_SQUARES_LOGIC":
      return { hours: [], squares: [] };
    default:
      return state;
  }
};

export default squaresReducer;
