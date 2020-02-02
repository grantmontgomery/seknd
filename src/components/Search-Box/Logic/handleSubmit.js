import { EventsCallNew, PlacesCallNew } from "../../../API Calls";

const handleSubmit = (event, state, dispatch, searchType) => {
  event.preventDefault();
  const {
    eventsCategory,
    radius,
    where,
    endDate,
    startDate,
    places,
    startFormatted,
    endFormatted,
    unixStartDate,
    unixEndDate
  } = state;

  if (searchType.places & !searchType.events) {
    if (radius && where && places) {
      return dispatch(PlacesCallNew(state));
    } else {
      alert("Please fill out missing fields.");
    }
  } else if (!searchType.places & searchType.events) {
    if (radius && where && endDate && startDate) {
      return dispatch(EventsCallNew(state));
    } else {
      alert("Please fill out missing fields.");
    }
  } else if (searchType.places & searchType.events) {
    if (radius && where & endDate & startDate & places) {
      return dispatch(PlacesCallNew(state)), dispatch(EventsCallNew(state));
    } else {
      alert("Please fill out missing fields.");
    }
  }
};

export default handleSubmit;
