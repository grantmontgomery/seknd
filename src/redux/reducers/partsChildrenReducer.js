const partsChildrenReducer = (
  state = { updated: false, nodeIDs: [] },
  action
) => {
  switch (action.type) {
    // case "ADD_CHILD":
    //   return [...state, action.payload];
    // case "REMOVE_CHILD":
    //   return state.filter(part => part !== action.payload);
    case "UPDATE_CHILDREN":
      return { updated: true, nodeIDs: action.payload };
    case "CLEAR_CHILDREN":
      return { updated: false, nodeIDs: [] };
    default:
      return state;
  }
};

export default partsChildrenReducer;
