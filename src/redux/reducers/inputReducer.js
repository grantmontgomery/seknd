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
        startDate,
        endDate: "",
        radius: "",
        where: "",
        events: "",
        places: ""
      };
    case "endDate":
      const endDate = action.payload;
      return {
        endDate,
        startDate: "",
        radius: "",
        where: "",
        events: "",
        places: ""
      };
    case "radius":
      const radius = action.payload;
      return {
        radius,
        startDate: "",
        endDate: "",
        where: "",
        events: "",
        places: ""
      };
    case "where":
      const where = action.payload;
      return {
        where,
        startDate: "",
        radius: "",
        endDate: "",
        events: "",
        places: ""
      };
    case "events":
      const events = action.payload;
      return {
        events,
        startDate: "",
        radius: "",
        where: "",
        endDate: "",
        places: ""
      };
    case "places":
      const places = action.payload;
      return {
        places,
        startDate: "",
        radius: "",
        endDate: "",
        events: "",
        where: ""
      };
    default:
      return state;
  }
};

export default inputReducer;
