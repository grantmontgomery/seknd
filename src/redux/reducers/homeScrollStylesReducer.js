const homeScrollStylesReducer = (
  state = {
    nav: {},
    backgroundDiv: {
      width: 150,
      height: 200,
      left: -100,
      top: -75,
      borderRadius: 100
    },
    search: {},
    select: {},
    schedule: {}
  },
  action
) => {
  switch (action.type) {
    case "BACKGROUND_ACTION_START":
      return {
        ...state,
        backgroundDiv: {
          width: 150,
          height: 200,
          left: -100,
          top: -75,
          borderRadius: 100
        }
      };
    case "BACKGROUND_SCROLL":
      const { width, height, left, top, borderRadius } = action.payload;
      return {
        ...state,
        backgroundDiv: {
          width,
          height,
          left,
          top,
          borderRadius
        }
      };
    case "BACKGROUND_ACTION_END":
      return {
        ...state,
        backgroundDiv: {
          width: 50,
          height: 75,
          left: 25,
          right: 25,
          top: 10,
          borderRadius: 0
        }
      };
    default:
      return state;
  }
};

export default homeScrollStylesReducer;
