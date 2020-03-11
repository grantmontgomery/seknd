const squaresReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SQUARES_LOGIC":
      return [...state, action.payload];
    case "CLEAR_SQUARES_LOGIC":
      return [];
    default:
      return state;
  }
};

export default squaresReducer;
