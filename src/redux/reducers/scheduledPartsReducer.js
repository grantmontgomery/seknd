const scheduledPartsReducer = (state = { parts: [], rows: [] }, action) => {
  switch (action.type) {
    case "UPDATE_SCHEDULED_ROWS":
      return { ...state, rows: [...action.payload] };
    case "UPDATE_SCHEDULED_PARTS":
      return { ...state, parts: [...action.payload] };
    case "CLEAR_SCHEDULED":
      return { parts: [], rows: [] };
    default:
      return state;
  }
};

export default scheduledPartsReducer;
