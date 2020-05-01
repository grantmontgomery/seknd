import { actions } from "../actions";

const squaresReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SQUARES_LOGIC":
      return [...action.payload];
    case "CLEAR_SQUARES_LOGIC":
      return [];
    case "ADD_PART_TO_SQUARE":
      const { index } = action.payload;
      return state.map((square, i) =>
        index === i ? { ...square, parts: [action.payload.part] } : square
      );
    case "CHANGE_SQUARE_PART_LENGTH":
      return state.map((square, index) =>
        action.payload.squareIndex === index
          ? {
              ...square,
              parts: [
                {
                  ...square.parts[0],
                  endingIndex: action.payload.endingIndex,
                  partStringLength: action.payload.partStringLength,
                  wrapperWidth: action.payload.wrapperWidth,
                  innerWidth: action.payload.innerWidth,
                  partEnd: action.payload.partEnd,
                },
              ],
            }
          : square
      );
    case "CHANGE_SQUARE_PART_DETAILS":
      const { squareIndex, ...detail } = action.payload;
      return state.map((square, index) =>
        squareIndex === index
          ? {
              ...square,
              parts: [
                {
                  ...square.parts[0],
                  ...detail,
                },
              ],
            }
          : square
      );
    case "REMOVE_PART_FROM_SQUARE":
      return state.map((square, index) =>
        action.payload.squareIndex === index ? { ...square, parts: [] } : square
      );
    case "SQUARE_PART_OFFGRID":
      return state.map((square, index) =>
        action.payload.index === index
          ? {
              ...square,
              parts: [
                {
                  ...square.parts[0],
                  onGrid: false,
                  partStart: "",
                  partEnd: "",
                },
              ],
            }
          : square
      );

    default:
      return state;
  }
};

export default squaresReducer;
