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
      return { ...state, loading: true };
    case "YELPPLACESLOADING":
      return { ...state, yelpLoading: true };
    case "YELPPLACES":
      return {
        ...state,
        yelpLoading: false,
        items: [...state.items, ...action.payload]
      };
    case "PLACESCLEAR":
      return { ...state, items: [], yelpError: false };
    case "PLACESFINISHED":
      return { ...state, loading: false };

    case "YELPPLACESERROR":
      return { ...state, yelpError: true };
    default:
      return state;
  }
};

export default placesReducerAPI;
