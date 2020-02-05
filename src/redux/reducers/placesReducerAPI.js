const placesReducerAPI = (state = [], action) => {
  switch (action.type) {
    case "PLACESLOADING":
      return [action.payload];
    case "YELPPLACESLOADING":
      return [...state, action.payload];
    case "YELPPLACES":
      return [...state, ...action.payload].filter(
        item => item !== "YELPLOADING"
      );
    case "PLACESCLEAR":
      return [];
    case "PLACESFINISHED":
      return state.filter(
        item => item !== "YELPPLACESLOADING" && item !== "LOADING"
      );
    case "YELPPLACESERROR":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default placesReducerAPI;
