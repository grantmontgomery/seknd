import React from "react";
import fetch from "node-fetch";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux";

const EventsCallNew = state => {
  const dispatch = useDispatch();
  const { eventsActions } = actions;
  const {
    eventsCategory,
    radius,
    where,
    startFormatted,
    endFormatted,
    unixStartDate,
    unixEndDate
  } = state;
  return async dispatch => {
    try {
      dispatch(eventsActions.eventsStepsAPI("LOADING"));
      let yelpEvents = await fetch("http://localhost:5000/yelpEventSearch", {
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

      let yelpEventsData = (await yelpEvents.json()).events.filter(
        event => event.category !== "kids-family"
      );

      yelpEventsData.forEach(
        event => ((event.source = "yelp"), (event.type = "event"))
      );
      dispatch(
        eventsActions.eventsStepsAPI({ type: "YELP", payload: yelpEventsData })
      );
    } catch {
      dispatch(
        eventsActions.eventsStepsAPI({ type: "YELPERROR", payload: "Error" })
      );
    }
    try {
      let ticketMasterEvents = await fetch(
        "http://localhost:5000/ticketMasterSearch",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            where,
            startFormatted,
            endFormatted,
            eventsCategory
          })
        }
      );

      let ticketMasterResponse = await ticketMasterEvents.json();
      const { _embedded } = ticketMasterResponse;
      const { events } = _embedded;
      events.forEach(
        event => ((event.source = "ticketmaster"), (event.type = "event"))
      );
      dispatch(
        eventsActions.eventsStepsAPI({ type: "TICKETMASTER", payload: events })
      );
      dispatch(eventsActions.eventsStepsAPI("FINISH"));
    } catch {
      dispatch(
        eventsActions.eventsStepsAPI({
          type: "TICKETMASTERERROR",
          payload: "Error"
        })
      );
    }
  };
};

export default EventsCallNew;
