// const eventsReducerAPI = (state = [], action) => {
//   switch (action.type) {
//     case "EVENTSLOADING":
//       return [action.payload];
//     case "YELPEVENTSLOADING":
//       return [...state, action.payload];
//     case "YELPEVENTS":
//       return [...state, ...action.payload].filter(
//         item => item !== "YELPLOADING"
//       );
//     case "TICKETMASTEREVENTSLOADING":
//       return [...state, action.payload];
//     case "TICKETMASTEREVENTS":
//       return [...state, ...action.payload].filter(
//         item => item !== "TICKETMASTERLOADING"
//       );
//     case "EVENTSFINISHED":
//       return state.filter(
//         item =>
//           item !== "TICKETMASTERLOADING" &&
//           item !== "LOADING" &&
//           item !== "YELPLOADING"
//       );
//     case "EVENTSCLEAR":
//       return [];
//     case "YELPEVENTSERROR":
//       return [...state, action.payload];
//     case "TICKETMASTERERROR":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default eventsReducerAPI;

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
      return (state["loading"] = true);
    case "YELPEVENTSLOADING":
      return (state["yelpLoading"] = true);
    case "YELPEVENTS":
      return (
        (state["items"] = [...state.items, ...action.payload]),
        (state["yelpLoading"] = false)
      );
    case "TICKETMASTEREVENTSLOADING":
      return (state["ticketMasterLoading"] = true);
    case "TICKETMASTEREVENTS":
      return (
        (state["items"] = [...state.items, ...action.payload]),
        (state["ticketMasterLoading"] = false)
      );
    case "EVENTSFINISHED":
      return (state["loading"] = false);
    case "EVENTSCLEAR":
      return (
        (state["items"] = []),
        (state["yelpError"] = false),
        (state["ticketMasterError"] = false)
      );
    case "YELPEVENTSERROR":
      return (state["yelpError"] = true);
    case "TICKETMASTERERROR":
      return (state["ticketMasterError"] = true);
    default:
      return state;
  }
};

export default eventsReducerAPI;
