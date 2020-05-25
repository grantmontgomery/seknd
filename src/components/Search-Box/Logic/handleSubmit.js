import { EventsCallNew, PlacesCallNew } from "../../../API Calls";
import setGrid from "./setGrid";
import setGridRows from "./setGridRows";
import { actions } from "../../../redux";

const handleSubmit = (event, query, dispatch, searchType) => {
  const {
    gridActions,
    hoursActions,
    squaresActions,
    dimensionsActions,
    scheduledPartsActions,
  } = actions;
  event.preventDefault();

  const {
    radius,
    location,
    endDate,
    startDate,
    places,
    startTime,
    endTime,
  } = query;

  if (searchType.places && !searchType.events) {
    if (radius !== "" && location !== "" && places !== "") {
      const gridObject = setGrid(startTime, endTime);

      const { desktop, mobile } = Object.keys(gridObject)
        .filter((key) => key !== "squares")
        .reduce((obj, key) => {
          obj[key] = gridObject[key];
          return obj;
        }, {});

      return (
        dispatch(PlacesCallNew(query)),
        dispatch(hoursActions("CLEAR_HOURS_LOGIC")),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(squaresActions("CLEAR_SQUARES_LOGIC")),
        dispatch(dimensionsActions("CLEAR_DIMENSIONS")),
        dispatch(
          dimensionsActions({
            type: "ADD_DIMENSIONS",
            payload: {
              desktop,
              mobile,
            },
          }),
          dispatch(
            squaresActions({
              type: "ADD_SQUARES_LOGIC",
              payload: gridObject.squares,
            })
          ),
          dispatch(
            scheduledPartsActions({
              type: "UPDATE_SCHEDULED_ROWS",
              payload: setGridRows(gridObject.squares.length),
            })
          ),
          dispatch(
            gridActions({
              type: "INPUT_DATES",
              payload: {
                start: {
                  startDate,
                  startTime,
                },
                end: { endDate, endTime },
              },
            })
          )
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
      const gridObject = setGrid(startTime, endTime);
      const { desktop, mobile } = Object.keys(gridObject)
        .filter((key) => key !== "squares")
        .reduce((obj, key) => {
          obj[key] = gridObject[key];
          return obj;
        }, {});

      return (
        dispatch(EventsCallNew(query)),
        dispatch(hoursActions("CLEAR_HOURS_LOGIC")),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(squaresActions("CLEAR_SQUARES_LOGIC")),
        dispatch(dimensionsActions("CLEAR_DIMENSIONS")),
        dispatch(
          dimensionsActions({
            type: "ADD_DIMENSIONS",
            payload: {
              desktop,
              mobile,
            },
          }),
          dispatch(
            squaresActions({
              type: "ADD_SQUARES_LOGIC",
              payload: gridObject.squares,
            })
          ),
          dispatch(
            scheduledPartsActions({
              type: "UPDATE_SCHEDULED_ROWS",
              payload: setGridRows(gridObject.squares.length),
            })
          ),
          dispatch(
            gridActions({
              type: "INPUT_DATES",
              payload: {
                start: {
                  startDate,

                  startTime,
                },
                end: { endDate, endTime },
              },
            })
          )
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
      const gridObject = setGrid(startTime, endTime);
      const { desktop, mobile } = Object.keys(gridObject)
        .filter((key) => key !== "squares")
        .reduce((obj, key) => {
          obj[key] = gridObject[key];
          return obj;
        }, {});

      return (
        dispatch(PlacesCallNew(query)),
        dispatch(EventsCallNew(query)),
        dispatch(hoursActions("CLEAR_HOURS_LOGIC")),
        dispatch(gridActions("CLEAR_DATES")),
        dispatch(squaresActions("CLEAR_SQUARES_LOGIC")),
        dispatch(dimensionsActions("CLEAR_DIMENSIONS")),
        dispatch(
          dimensionsActions({
            type: "ADD_DIMENSIONS",
            payload: {
              desktop,
              mobile,
            },
          }),
          dispatch(
            squaresActions({
              type: "ADD_SQUARES_LOGIC",
              payload: gridObject.squares,
            })
          ),
          dispatch(
            scheduledPartsActions({
              type: "UPDATE_SCHEDULED_ROWS",
              payload: setGridRows(gridObject.squares.length),
            })
          ),
          dispatch(
            gridActions({
              type: "INPUT_DATES",
              payload: {
                start: {
                  startDate,
                  startTime,
                },
                end: { endDate, endTime },
              },
            })
          )
        )
      );
    } else {
      alert("Please fill out missing fields.");
    }
  }
};

export default handleSubmit;
