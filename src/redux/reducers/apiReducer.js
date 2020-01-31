const apiReducer = (state = ["All"], action) => {
  switch (action.type) {
    case "ALL":
      return ["ALL"];
    case "EVENTS":
      return ["EVENTS"];
    case "PLACES":
      return ["PLACES"];
    default:
      return state;
  }
};

export default apiReducer;
