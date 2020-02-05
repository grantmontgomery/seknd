const eventsReducerAPI = (state = [], action) => {
  switch (action.type) {
    case "EVENTSLOADING":
      return [action.payload];
    case "YELPEVENTSLOADING":
      return [...state, action.payload];
    case "YELPEVENTS":
      return [...state, ...action.payload].filter(
        item => item !== "YELPLOADING"
      );
    case "TICKETMASTEREVENTSLOADING":
      return [...state, action.payload];
    case "TICKETMASTEREVENTS":
      return [...state, ...action.payload].filter(
        item => item !== "TICKETMASTERLOADING"
      );
    case "EVENTSFINISHED":
      return state.filter(
        item =>
          item !== "TICKETMASTERLOADING" &&
          item !== "LOADING" &&
          item !== "YELPLOADING"
      );
    case "EVENTSCLEAR":
      return [];
    case "YELPEVENTSERROR":
      return [...state, action.payload];
    case "TICKETMASTERERROR":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default eventsReducerAPI;
