const resultsReducer = (state = { places: true, events: true }, action) => {
  switch (action.type) {
    case "EVENTS":
      return { places: false, events: true };
    case "PLACES":
      return { places: true, events: false };
    case "ALL":
      return { places: true, events: true };
    default:
      return state;
  }
};

export default resultsReducer;
