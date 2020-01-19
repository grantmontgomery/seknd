const resultsReducer = (state = { places: false, events: false }, action) => {
  switch (action.type) {
    case "EVENTS":
      return (state.events = true), (state.places = false);
    case "PLACES":
      return (state.places = true), (state.events = false);
    case "ALL":
      return (state.places = true), (state.events = true);
    default:
      return state;
  }
};
