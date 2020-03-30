const homeScrollStylesReducer = (
  state = {
    nav: {},
    backgroundDiv: {
      width: 150,
      height: 200,
      zIndex: 100,
      left: 100,
      top: 75,
      borderRadius: 100
    },
    search: {},
    select: {},
    schedule: {}
  },
  action
) => {
  switch (action.type) {
    case "BACKGROUND_ACTION":
      return { ...state, backgroundDiv: {} };
    default:
      return state;
  }
};

export default homeScrollStylesReducer;
