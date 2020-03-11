const hoursReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HOURS_LOGIC":
      return [...action.payload];
    case "CLEAR_HOURS_LOGIC":
      return [];
    default:
      return state;
  }
};

export default hoursReducer;
