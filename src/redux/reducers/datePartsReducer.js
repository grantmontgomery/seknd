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
          partStringLength: "",
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
              partStringLength: action.payload.partStringLength,
              wrapperWidth: action.payload.wrapperWidth,
              innerWidth: action.payload.innerWidth,
            }
          : part
      );
    case "PART_OFF_GRID":
      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? {
              ...part,
              onGrid: false,
              partStringLength: "",
              squareIndex: null,
              partStart: "",
              wrapperWidth: 200,
              innerWidth: 400,
            }
          : part
      );
    case "PART_SQUARE_INDEX":
      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? {
              ...part,
              onGrid: true,
              squareIndex: action.payload.squareIndex,
              partStart: action.payload.partStart,
            }
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
