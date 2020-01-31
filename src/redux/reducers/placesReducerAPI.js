const placesReducerAPI = (state = [], action) => {
  switch (action.type) {
    case "LOADING":
      return ["LOADING"];
    case "YELP":
      return [action.payload];
    case "CLEARPLACES":
      return [];
    case "FINISH":
      return [...state];
    default:
      return state;
  }
};

export default placesReducerAPI;
