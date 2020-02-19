import { EventsCallNew, PlacesCallNew } from "../../../API Calls";

const handleSubmit = (event, query, dispatch, searchType) => {
  event.preventDefault();

  const { radius, location, endDate, startDate, places } = query;

  if (searchType.places & !searchType.events) {
    if (radius !== "" && location !== "" && places !== "") {
      return dispatch(PlacesCallNew(query));
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
      return dispatch(EventsCallNew(query));
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
      return dispatch(PlacesCallNew(query)), dispatch(EventsCallNew(query));
    } else {
      alert("Please fill out missing fields.");
    }
  }
};

export default handleSubmit;
