const eventsReducerAPI = (state = [], action) => {
  switch (action.type) {
    case "LOADING":
      return ["LOADING"];
    case "YELP":
      return ["LOADING", action.payload];
    case "TICKETMASTER":
      return [...state, action.payload];
    case "FINISHED":
      return state.filter(item => item === "LOADING");
    case "CLEAREVENTS":
      return [];
    case "YELPERROR":
      return [...state, { [action.type]: action.payload }];
    case "TICKETMASTERERROR":
      return [...state, { [action.type]: action.payload }];
    default:
      return state;
  }
};

export default eventsReducerAPI;
