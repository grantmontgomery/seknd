const renderPlaces = input => {
  return {
    type: "PLACES",
    payload: input
  };
};

const renderEvents = input => {
  return {
    type: "EVENTS",
    payload: input
  };
};

const renderAll = input => {
  return {
    type: "ALL",
    payload: input
  };
};

const restultsActions = { renderAll, renderEvents, renderPlaces };

export default restultsActions;
