const navStylesReducer = (
  state = { background: "transparent", logoColor: "white" },
  action
) => {
  switch (action.type) {
    case "NAV_HOME": {
      return { background: "transparent", logoColor: "white" };
    }
    case "NAV_OTHER": {
      return { background: "rgba(255, 255, 255, 0.75)", logoColor: "black" };
    }
    default:
      return state;
  }
};

export default navStylesReducer;
