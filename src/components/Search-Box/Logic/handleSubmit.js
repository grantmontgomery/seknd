import { EventsCallNew, PlacesCallNew } from "../../../API Calls";

const handleSubmit = (event, state, dispatch, searchType) => {
  event.preventDefault();

  const { radius, location, endDate, startDate, places } = state;

  if (searchType.places & !searchType.events) {
    if (radius !== "" && location !== "" && places !== "") {
      return dispatch(PlacesCallNew(state));
    } else {
      alert("Please fill out missing fields.");
    }
  } else if (!searchType.places & searchType.events) {
    if (
      radius !== "" &&
      location !== "" &&
      endDate !== "" &&
      startDate !== ""
    ) {
      return dispatch(EventsCallNew(state));
    } else {
      alert("Please fill out missing fields.");
    }
  } else if (searchType.places & searchType.events) {
    if (
      radius !== "" &&
      (location !== "") &
        (endDate !== "") &
        (startDate !== "") &
        (places !== "")
    ) {
      return dispatch(PlacesCallNew(state)), dispatch(EventsCallNew(state));
    } else {
      alert("Please fill out missing fields.");
    }
  }
};

export default handleSubmit;
