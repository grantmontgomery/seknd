const datePartsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PART":
      return state => [...state, action.payload];
    case "REMOVE_PART":
      return state.filter(part => part !== action.payload);
    default:
      return state;
  }
};

export default datePartsReducer;
