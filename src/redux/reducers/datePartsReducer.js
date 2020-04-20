const datePartsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PART":
      const {
        wrapperWidth,
        id,
        part,
        innerWidth,
        partStart,
        squareIndex,
        onGrid,
      } = action.payload;
      return [
        ...state,
        {
          ...action.payload,
          onGrid: false,
          partStart: "",
          partEnd: "",
          squareIndex: null,
          partLocation: "parts",
          wrapperWidth: 200,
          innerWidth: 400,
          timeLength: "",
        },
      ];
    case "REMOVE_PART":
      return state.filter((part) => part.id !== action.payload);
    case "PART_CHANGE_LENGTH":
      // This won't work you must create a new state with the new part updated.
      // const { id, wrapper, inner } = action.payload;

      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? {
              ...part,
              wrapperWidth: action.payload.wrapperWidth,
              innerWidth: action.payload.innerWidth,
            }
          : part
      );
    case "PART_ON_GRID":
      return state.map((part, index) =>
        state[index].id === action.payload.id ? { ...part, onGrid: true } : part
      );
    case "PART_OFF_GRID":
      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? {
              ...part,
              onGrid: false,
              squareIndex: action.payload.squareIndex,
              partStart: action.payload.partStart,
              wrapperWidth: 200,
              innerWidth: 400,
            }
          : part
      );
    case "PART_SQUARE_INDEX":
      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? { ...part, squareIndex: action.payload.squareIndex }
          : part
      );
    case "PART_TIMES":
      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? { ...part, partStart: action.payload.partStart }
          : part
      );
    case "CLEAR_PARTS":
      return [];
    default:
      return state;
  }
};

export default datePartsReducer;
