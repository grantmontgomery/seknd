const squaresReducer = (state = { hours: [], squares: [] }, action) => {
  switch (action.type) {
    case "ADD_SQUARE_LOGIC":
      return state => ({ ...state, ...action.payload });
    case "CLEAR_SQUARE_LOGIC":
      return { hours: [], squares: [] };
    default:
      return state;
  }
};

export default squaresReducer;
