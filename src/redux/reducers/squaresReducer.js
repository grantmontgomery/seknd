const squaresReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SQUARES_LOGIC":
      return [...action.payload];
    case "CLEAR_SQUARES_LOGIC":
      return [];
    case "ADD_PART_TO_SQUARE":
      const index = action.payload.index;
      state[index].parts.push(action.payload.part);
      return state;
    default:
      return state;
  }
};

export default squaresReducer;
