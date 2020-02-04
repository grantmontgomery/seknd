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
  return fetch("http://localhost:5000/ticketMasterSearch", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      radius,
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
  const start_Date = unixStartDate;
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
      start_Date,
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
  console.log("events call triggered");
  return async dispatch => {
    dispatch(eventsActions.eventsStepsAPI("LOADING"));
    console.log("loading");
    try {
      console.log("yelp events api attempt");
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
        event => ((event.source = "yelp"), (event.type = "event"))
      );
      dispatch(
        eventsActions.eventsStepsAPI({ type: "YELP", payload: yelpData })
      );
      console.log(yelpData);
    } catch {
      dispatch(
        eventsActions.eventsStepsAPI({ type: "YELP", payload: "YELPERROR" })
      );
      console.log("yelp event error");
    }
    try {
      console.log("ticketmaster events api attempt");
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
        event => ((event.source = "ticketmaster"), (event.type = "event"))
      );

      console.log(events);
      dispatch(
        eventsActions.eventsStepsAPI({ type: "TICKETMASTER", payload: events })
      );
    } catch {
      console.log("Ticketmaster error");
      dispatch(
        eventsActions.eventsStepsAPI({
          type: "TICKETMASTERERROR",
          payload: "ERROR"
        })
      );
    }
  };
};
export default EventsCallNew;
