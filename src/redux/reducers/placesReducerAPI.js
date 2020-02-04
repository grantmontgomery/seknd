const placesReducerAPI = (state = [], action) => {
  switch (action.type) {
    case "PLACESLOADING":
      return ["LOADING"];
    case "PLACESYELP":
      return [action.payload];
    case "PLACESCLEAR":
      return [];
    case "PLACESFINISH":
      return [...state];
    default:
      return state;
  }
};

export default placesReducerAPI;
