import { EventsCallNew, PlacesCallNew } from "../../../API Calls";
import { actions } from "../../../redux";

const handleSubmit = (event, query, dispatch, searchType) => {
  const { gridActions } = actions;
  event.preventDefault();

  const {
    radius,
    location,
    endDate,
    startDate,
    places,
    startHour,
    endHour,
    startMinutes,
    endMinutes,
    endDay,
    startDay
  } = query;

  if (searchType.places & !searchType.events) {
    if (radius !== "" && location !== "" && places !== "") {
      return (
        dispatch(PlacesCallNew(query)),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(
          gridActions({
            type: "INPUT_DATES",
            payload: {
              start: { startDate, startDay, startHour, startMinutes },
              end: { endHour, endDate, endDay, endMinutes }
            }
          })
        )
      );
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
      return (
        dispatch(EventsCallNew(query)),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(
          gridActions({
            type: "INPUT_DATES",
            payload: {
              start: { startDate, startDay, startHour, startMinutes },
              end: { endHour, endDate, endDay, endMinutes }
            }
          })
        )
      );
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
      return (
        dispatch(PlacesCallNew(query)),
        dispatch(EventsCallNew(query)),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(
          gridActions({
            type: "INPUT_DATES",
            payload: {
              start: { startDate, startDay, startHour, startMinutes },
              end: { endHour, endDate, endDay, endMinutes }
            }
          })
        )
      );
    } else {
      alert("Please fill out missing fields.");
    }
  }
};

export default handleSubmit;
