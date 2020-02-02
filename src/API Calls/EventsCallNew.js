import React from "react";
import fetch from "node-fetch";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux";
import eventsActions from "../redux/actions/eventsActions";

const ticketMasterEvents = ({
  eventsCategory,
  radius,
  where,
  startFormatted,
  endFormatted
}) => {
  return fetch("http://localhost:5000/ticketMasterSearch", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      radius,
      where,
      startFormatted,
      endFormatted,
      eventsCategory
    })
  });
};

const yelpEvents = ({
  eventsCategory,
  radius,
  where,
  unixStartDate,
  unixEndDate
}) => {
  return fetch("http://localhost:5000/yelpEventSearch", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      where,
      radius,
      unixStartDate,
      unixEndDate,
      eventsCategory
    })
  });
};

const EventsCallNew = ({
  eventsCategory,
  radius,
  where,
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
        where,
        radius,
        unixStartDate,
        unixEndDate,
        eventsCategory
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
    } catch {
      dispatch(
        eventsActions.eventsStepsAPI({ type: "YELP", payload: "YELPERROR" })
      );
      console.log("yelp event error");
    }
    try {
      console.log("ticketmaster events api attempt");
      let eventsTicketMaster = await ticketMasterEvents({
        where,
        radius,
        startFormatted,
        endFormatted,
        eventsCategory
      });
      let ticketmasterData = await eventsTicketMaster.json();
      const { _embedded } = ticketmasterData;
      const { events } = _embedded;
      events.forEach(
        event => ((event.source = "ticketmaster"), (event.type = "event"))
      );
      dispatch(
        eventsActions.eventsStepsAPI({
          type: "TICKETMASTER",
          payload: "TICKETMASTERERROR"
        })
      );
    } catch {
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
