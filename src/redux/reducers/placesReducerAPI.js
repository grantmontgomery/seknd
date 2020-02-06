// const placesReducerAPI = (state = [], action) => {
//   switch (action.type) {
//     case "PLACESLOADING":
//       return [action.payload];
//     case "YELPPLACESLOADING":
//       return [...state, action.payload];
//     case "YELPPLACES":
//       return [...state, ...action.payload].filter(
//         item => item !== "YELPLOADING"
//       );
//     case "PLACESCLEAR":
//       return [];
//     case "PLACESFINISHED":
//       return state.filter(
//         item => item !== "YELPPLACESLOADING" && item !== "LOADING"
//       );
//     case "YELPPLACESERROR":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default placesReducerAPI;

const placesReducerAPI = (
  state = {
    loading: false,
    yelpLoading: false,
    items: [],
    yelpError: false
  },
  action
) => {
  switch (action.type) {
    case "PLACESLOADING":
      return (state["loading"] = true);
    case "YELPPLACESLOADING":
      return (state["yelpLoading"] = true);
    case "YELPPLACES":
      return (
        (state["yelpLoading"] = false), (state["items"] = [...action.payload])
      );
    case "PLACESCLEAR":
      return (state["items"] = []), (state["yelpError"] = false);
    case "PLACESFINISHED":
      return (state["loading"] = false);
    case "YELPPLACESERROR":
      return (state["yelpError"] = true);
    default:
      return state;
  }
};

export default placesReducerAPI;
