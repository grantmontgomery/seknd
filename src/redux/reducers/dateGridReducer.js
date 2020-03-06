const dateGridReducer = (
  state = {
    start: {
      startDate: "",
      startTime: 0
    },
    end: { endDate: "", endTime: 0 }
  },
  action
) => {
  switch (action.type) {
    case "INPUT_DATES":
      return action.payload;
    case "CLEAR_DATES":
      return {
        start: {
          startDate: "",
          startTime: 0
        },
        end: {
          endDate: "",
          endTime: 0
        }
      };

    default: {
      return state;
    }
  }
};

export default dateGridReducer;
