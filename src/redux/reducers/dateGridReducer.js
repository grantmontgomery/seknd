const dateGridReducer = (
  state = {
    start: {
      startDate: "",
      startDay: null,
      startHour: null,
      startMinutes: null
    },
    end: { endDate: "", endDay: null, endHour: null, endMinutes: null }
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
          startDay: null,
          startHour: null,
          startMinutes: null
        },
        end: { endDate: "", endDay: null, endHour: null, endMinutes: null }
      };

    default: {
      return state;
    }
  }
};

export default dateGridReducer;
