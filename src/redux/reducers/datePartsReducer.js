const datePartsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PART":
      return [
        ...state,
        {
          ...action.payload,
          partStringLength: "",
          onGrid: false,
          partStart: "",
          partEnd: "",
          endingIndex: null,
          squareIndex: null,
          partLocation: "parts",
          desktopDrag: {
            wrapperWidth: 200,
            innerWidth: 400,
          },
          mobileDrag: {
            wrapperWidth: 100,
            innerWidth: 200,
          },
          timeLength: "",
          savedOrderStart: null,
          detailOne: "",
          detailTwo: "",
        },
      ];
    case "REMOVE_PART":
      return state.filter((part) => part.id !== action.payload);
    case "CHANGE_PART_DETAILS":
      const { id, ...detail } = action.payload;
      return state.map((part) =>
        part.id === id ? { ...part, ...detail } : part
      );
    case "PART_CHANGE_LENGTH":
      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? {
              ...part,
              ...action.payload,
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
              endingIndex: null,
              squareIndex: null,
              partStart: "",
              partEnd: "",
              desktopDrag: {
                wrapperWidth: 200,
                innerWidth: 400,
              },
              mobileDrag: {
                wrapperWidth: 100,
                innerWidth: 200,
              },
              savedOrderStart: null,
            }
          : part
      );
    case "PART_SQUARE_INDEX":
      return state.map((part, index) =>
        state[index].id === action.payload.id
          ? {
              ...part,
              onGrid: true,
              ...action.payload,
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
