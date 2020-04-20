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
      // This won't work you must create a new state with the new part updated.
      const { id, wrapper, inner } = action.payload;
      let index = null;
      // for (let i = 0; i < state.length; i++) {
      //   if (state[i].id === id) {
      //     index = i;
      //   }
      // }
      // return [
      //   ...state.filter((part) => part.id !== id),
      //   { ...state[index], wrapperWidth: wrapper, innerWidth: inner },
      // ];
      return state.map((part, index) => {
        if (state[index].id === id) {
          return { ...part, wrapperWidth: wrapper, innerWidth: inner };
        } else {
          return part;
        }
      });
    case "CLEAR_PARTS":
      return [];
    default:
      return state;
  }
};

export default datePartsReducer;
