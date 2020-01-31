const placesStepsAPI = input => {
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

const placesActions = { placesStepsAPI };

export default placesActions;
