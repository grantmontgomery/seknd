const dateGridReducer = (state = { startDate: "", endDate: "" }, action) => {
  switch (action.type) {
    case "INPUT_DATES":
      return action.payload;
    case "CLEAR_DATES":
      return { startDate: "", endDate: "" };

    default: {
      return state;
    }
  }
};

export default dateGridReducer;
