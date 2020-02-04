const eventsReducerAPI = (state = [], action) => {
  switch (action.type) {
    case "EVENTSLOADING":
      return ["LOADING"];
    case "YELPLOADING":
      return [...state, "LOADING"];
    case "TICKETMASTERLOADING":
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
