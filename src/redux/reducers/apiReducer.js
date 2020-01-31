const apiReducer = (state = ["All"], action) => {
  switch (action.type) {
    case { places: true, events: true }:
      return ["ALL"];
    case { places: false, events: true }:
      return ["EVENTS"];
    case { places: true, events: false }:
      return ["PLACES"];
    default:
      return state;
  }
};

export default apiReducer;
