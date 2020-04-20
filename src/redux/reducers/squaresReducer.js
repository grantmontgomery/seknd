const squaresReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SQUARES_LOGIC":
      return [...action.payload];
    case "CLEAR_SQUARES_LOGIC":
      return [];
    case "ADD_PART_TO_SQUARE":
      const { index } = action.payload;
      // state[index].parts.push(action.payload.part);

      return state.map((square, i) =>
        index === i ? { ...square, parts: [action.payload.part] } : square
      );
    case "REMOVE_PART_FROM_SQUARE":
      return state.map((square, index) =>
        action.payload.squareIndex === index ? { ...square, parts: [] } : square
      );
    default:
      return state;
  }
};

export default squaresReducer;
