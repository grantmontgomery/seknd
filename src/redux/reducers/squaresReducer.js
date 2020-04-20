const squaresReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SQUARES_LOGIC":
      return [...action.payload];
    case "CLEAR_SQUARES_LOGIC":
      return [];
    case "ADD_PART_TO_SQUARE":
      const { index } = action.payload;
      // state[index].parts.push(action.payload.part);

      return state.map((square, i) => {
        if (index === i) {
          return { ...square, parts: [action.payload.part] };
        } else {
          return square;
        }
      });
    case "REMOVE_PART_FROM_SQUARE":
      // if (part.onGrid === true) {
      //   state[part.squareIndex].parts = [];
      // }

      return state.map((square, index) => {
        if (action.payload.part.squareIndex === index) {
          return { ...square, parts: [] };
        } else {
          return square;
        }
      });
    default:
      return state;
  }
};

export default squaresReducer;
