import { EventsCallNew, PlacesCallNew } from "../../../API Calls";
import { actions } from "../../../redux";

const handleSubmit = (event, query, dispatch, searchType) => {
  const { gridActions, hoursActions, squaresActions } = actions;
  event.preventDefault();

  const {
    radius,
    location,
    endDate,
    startDate,
    places,
    startTime,
    endTime
  } = query;

  if (searchType.places & !searchType.events) {
    if (radius !== "" && location !== "" && places !== "") {
      return (
        dispatch(PlacesCallNew(query)),
        dispatch(hoursActions("CLEAR_HOURS_LOGIC")),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(squaresActions("CLEAR_SQUARES_LOGIC")),
        dispatch(
          gridActions({
            type: "INPUT_DATES",
            payload: {
              start: {
                startDate,
                startTime
              },
              end: { endDate, endTime }
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
        dispatch(hoursActions("CLEAR_HOURS_LOGIC")),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(squaresActions("CLEAR_SQUARES_LOGIC")),
        dispatch(
          gridActions({
            type: "INPUT_DATES",
            payload: {
              start: {
                startDate,

                startTime
              },
              end: { endDate, endTime }
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
        dispatch(hoursActions("CLEAR_HOURS_LOGIC")),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(squaresActions("CLEAR_SQUARES_LOGIC")),
        dispatch(
          gridActions({
            type: "INPUT_DATES",
            payload: {
              start: {
                startDate,
                startTime
              },
              end: { endDate, endTime }
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
