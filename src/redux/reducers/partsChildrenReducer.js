const partsChildrenReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CHILD":
      return [...state, action.payload];
    case "REMOVE_CHILD":
      return state.filter(part => part !== action.payload);
    case "CLEAR_CHILDREN":
      return [];
    default:
      return state;
  }
};

export default partsChildrenReducer;
