const eventsReducerAPI = (
  state = {
    loading: false,
    yelpLoading: false,
    ticketMasterLoading: false,
    items: [],
    yelpError: false,
    ticketMasterError: false
  },
  action
) => {
  switch (action.type) {
    case "EVENTSLOADING":
      return { ...state, loading: true };
    case "YELPEVENTSLOADING":
      return { ...state, yelpLoading: true };
    case "YELPEVENTS":
      return {
        ...state,
        yelpLoading: false,
        items: [...state.items, ...action.payload]
      };
    case "TICKETMASTEREVENTSLOADING":
      return { ...state, ticketMasterLoading: true };
    case "TICKETMASTEREVENTS":
      return {
        ...state,
        ticketMasterLoading: false,
        items: [...state.items, ...action.payload]
      };
    case "EVENTSFINISHED":
      return { ...state, loading: false };
    case "EVENTSCLEAR":
      return {
        ...state,
        items: [],
        yelpError: false,
        ticketMasterError: false
      };
    case "YELPEVENTSERROR":
      return { ...state, yelpError: true };
    case "TICKETMASTERERROR":
      return { ...state, ticketMasterError: true };
    default:
      return state;
  }
};

export default eventsReducerAPI;
