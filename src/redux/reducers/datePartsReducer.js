const datePartsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PART":
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
      const { id, wrapper, inner } = action.payload;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
          state[i].wrapperWidth = wrapper;
          state[i].innerWidth = inner;
        }
      }
      return state;
    case "CLEAR_PARTS":
      return [];
    default:
      return state;
  }
};

export default datePartsReducer;
