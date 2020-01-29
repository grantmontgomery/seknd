const inputReducer = (
  state = {
    startDate: "",
    endDate: "",
    radius: "",
    where: "",
    events: "",
    places: ""
  },
  action
) => {
  switch (action.type) {
    case "startDate":
      const startDate = action.payload;
      return {
        ...state,
        startDate
      };
    case "endDate":
      const endDate = action.payload;
      return {
        ...state,
        endDate
      };
    case "radius":
      const radius = action.payload;
      return {
        ...state,
        radius
      };
    case "where":
      const where = action.payload;
      return {
        ...state,
        where
      };
    case "events":
      const events = action.payload;
      return {
        ...state,
        events
      };
    case "places":
      const places = action.payload;
      return {
        ...state,
        places
      };
    case "RESET_INPUT":
      return {
        startDate: "",
        endDate: "",
        radius: "",
        where: "",
        events: "",
        places: ""
      };
    default:
      return state;
  }
};

export default inputReducer;
