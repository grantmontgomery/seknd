const navStylesReducer = (
  state = { background: "transparent", logoColor: "white", opacity: "1" },
  action
) => {
  switch (action.type) {
    case "NAV_HOME": {
      return { background: "transparent", logoColor: "white", opacity: "1" };
    }
    case "NAV_OTHER": {
      return {
        background: "transparent",
        logoColor: "black",
        opacity: 1.0
      };
    }
    case "NAV_OPACITY_ZERO": {
      return { ...state, opacity: "0" };
    }
    case "NAV_OPACITY_FULL": {
      return { ...state, opacity: "1" };
    }
    default:
      return state;
  }
};

export default navStylesReducer;
