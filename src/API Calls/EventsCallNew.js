import fetch from "node-fetch";
import eventsActions from "../redux/actions/eventsActions";

const ticketMasterEvents = ({
  ticketMasterCategories,
  radius,
  location,
  startFormatted,
  endFormatted
}) => {
  const startDateTime = startFormatted;
  const endDateTime = endFormatted;
  const segmentId = ticketMasterCategories;
  const radiusInt = Math.floor(parseInt(radius) * 0.001).toString();
  return fetch("http://localhost:5000/ticketMasterSearch", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      radiusInt,
      location,
      startDateTime,
      endDateTime,
      segmentId
    })
  });
};

const yelpEvents = ({
  yelpCategories,
  radius,
  location,
  unixStartDate,
  unixEndDate
}) => {
  const start_date = unixStartDate;
  const end_date = unixEndDate;
  const categories = yelpCategories;
  const radiusInt = parseInt(radius);
  return fetch("http://localhost:5000/yelpEventSearch", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      location,
      radiusInt,
      start_date,
      end_date,
      categories
    })
  });
};

const EventsCallNew = ({
  yelpCategories,
  ticketMasterCategories,
  radius,
  location,
  startFormatted,
  endFormatted,
  unixStartDate,
  unixEndDate
}) => {
  return async dispatch => {
    dispatch(eventsActions.eventsStepsAPI("EVENTSCLEAR"));
    dispatch(eventsActions.eventsStepsAPI("EVENTSLOADING"));
    try {
      dispatch(eventsActions.eventsStepsAPI("YELPEVENTSLOADING"));
      let eventsYelp = await yelpEvents({
        location,
        radius,
        unixStartDate,
        unixEndDate,
        yelpCategories
      });
      let yelpData = (await eventsYelp.json()).events.filter(
        event => event.category !== "kids-family"
      );
      yelpData.forEach(
        event => (
          (event.source = "yelp"),
          (event.type = "event"),
          (event.inParts = false),
          (event.onGrid = false)
        )
      );
      dispatch(
        eventsActions.eventsStepsAPI({ type: "YELPEVENTS", payload: yelpData })
      );
    } catch {
      dispatch(eventsActions.eventsStepsAPI("YELPEVENTSERROR"));
    }
    try {
      dispatch(eventsActions.eventsStepsAPI("TICKETMASTEREVENTSLOADING"));
      let eventsTicketMaster = await ticketMasterEvents({
        location,
        radius,
        startFormatted,
        endFormatted,
        ticketMasterCategories
      });
      let ticketmasterData = await eventsTicketMaster.json();
      const { _embedded } = ticketmasterData;
      const { events } = _embedded;
      events.forEach(
        event => (
          (event.source = "ticketmaster"),
          (event.type = "event"),
          (event.inParts = false)
        )
      );
      dispatch(
        eventsActions.eventsStepsAPI({
          type: "TICKETMASTEREVENTS",
          payload: events
        })
      );
      dispatch(eventsActions.eventsStepsAPI("EVENTSFINISHED"));
    } catch {
      dispatch(eventsActions.eventsStepsAPI("TICKETMASTERERROR"));
      dispatch(eventsActions.eventsStepsAPI("EVENTSFINISHED"));
    }
  };
};
export default EventsCallNew;
