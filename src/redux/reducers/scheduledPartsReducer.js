const scheduledPartsReducer = (state = { parts: [], columns: [] }, action) => {
  switch (action.type) {
    case "UPDATE_SCHEDULED_PARTS":
      return { ...state, ...action.payload };
    case "UPDATED_SCHEDULED_PARTS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default scheduledPartsReducer;
