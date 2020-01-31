const eventsStepsAPI = input => {
  if (typeof input === "object") {
    return {
      type: input.type,
      payload: input.payload
    };
  } else {
    return {
      type: input
    };
  }
};

const eventsActions = { eventsStepsAPI };

export default eventsActions;
