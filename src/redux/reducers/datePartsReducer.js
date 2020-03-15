const datePartsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PART":
      return [
        ...state,
        {
          ...action.payload,
          onGrid: false,
          start: "",
          end: "",
          squareIndex: null,
          partLocation: "parts"
        }
      ];
    case "REMOVE_PART":
      return state.filter(part => part.id !== action.payload);
    case "CLEAR_PARTS":
      return [];
    default:
      return state;
  }
};

export default datePartsReducer;
