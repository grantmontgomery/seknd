import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import css from "./Search-Box.css";
import {
  SearchSelector,
  WhereSelector,
  WhenSelector
} from "./Search-Box-Parts";
import { EventsSearch } from "../EventsSearch";
import { PlacesSearch } from "../PlacesSearch";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import { PlacesCallNew, EventsCallNew } from "../../API Calls";
import { CSSTransition, TransitionGroup } from "react-transition-group";

require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = () => {
  const searchType = useSelector(state => state.resultsReducers);
  const { placesActions } = actions;
  const dispatch = useDispatch();
  let [state, setState] = useState({
    eventsCategory: "",
    radius: "",
    where: "",
    endDate: "",
    startDate: "",
    places: "",
    startFormatted: "",
    endFormatted: "",
    unixStartDate: "",
    unixEndDate: ""
  });

  const handleState = input => {
    const key = Object.keys(input).join();
    const value = Object.values(input).join();
    setState(state => ({
      ...state,
      [key]: value
    }));
  };

  const yelpBusinesses = state => {
    const { places, where, radius } = state;
    return fetch("http://localhost:5000/yelpBusinessSearch", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ places, where, radius })
    });
  };

  const yelpEvents = state => {
    const { eventsCategory, radius, where, unixStartDate, unixEndDate } = state;
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
  const ticketMasterEvents = state => {
    const {
      eventsCategory,
      radius,
      where,
      startFormatted,
      endFormatted
    } = state;
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

  const placesSubmit = state => {
    console.log("places call triggered");
    return dispatch => {
      dispatch(placesActions.placesStepsAPI("LOADING"));
      console.log("loading");
      return yelpBusinesses(state)
        .then(data => data.json())
        .then(businesses => {
          businesses.forEach(business => (business["type"] = "venue"));
          dispatch(placesActions.placesStepsAPI("YELP"));
          dispatch(placesActions.placesStepsAPI("FINISH"));
          console.log(businesses);
        })
        .catch(error => console.log(error.message));
    };
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(PlacesCallNew(state));
  };

  // const handleSubmit = event => {
  //   const { radius, where, startDate, endDate, places } = state;
  //   if (searchType.places === false) {
  //     const eventsObject = { radius, where, startDate, endDate };
  //     const values = Object.values(eventsObject);
  //     if (values.some(value => value === "") === true) {
  //       alert("Please fill in missing search fields.");
  //     } else {
  //       event.preventDefault();
  //       dispatch(apiActions.selectCall("EVENTS", state));
  //       setState({
  //         eventsCategory: "",
  //         radius: "",
  //         where: "",
  //         endDate: "",
  //         startDate: "",
  //         places: "",
  //         startFormatted: "",
  //         endFormatted: "",
  //         unixStartDate: "",
  //         unixEndDate: ""
  //       });
  //     }
  //   } else if (searchType.events === false) {
  //     const placesObject = { radius, where, startDate, endDate, places };
  //     const values = Object.values(placesObject);
  //     if (values.some(value => value === "") === true) {
  //       alert("Please fill in missing search fields.");
  //     } else {
  //       event.preventDefault();
  //       dispatch(apiActions.selectCall("PLACES", state));
  //       setState({
  //         eventsCategory: "",
  //         radius: "",
  //         where: "",
  //         endDate: "",
  //         startDate: "",
  //         places: "",
  //         startFormatted: "",
  //         endFormatted: "",
  //         unixStartDate: "",
  //         unixEndDate: ""
  //       });
  //     }
  //   } else {
  //     const values = Object.values({
  //       radius,
  //       where,
  //       startDate,
  //       endDate,
  //       places
  //     });
  //     if (values.some(value => value === "") === true) {
  //       alert("Please fill in missing search fields");
  //     } else {
  //       event.preventDefault();
  //       dispatch(apiActions.selectCall("ALL", state));
  //       PlacesCallNew(state);
  //       EventsCallNew(state);
  //       setState({
  //         eventsCategory: "",
  //         radius: "",
  //         where: "",
  //         endDate: "",
  //         startDate: "",
  //         places: "",
  //         startFormatted: "",
  //         endFormatted: "",
  //         unixStartDate: "",
  //         unixEndDate: ""
  //       });
  //     }
  //   }
  // };

  // const fetchData = (dispatch) => {
  //   return async (dispatch) => {
  //     try {
  //       loading("events");
  //       let yelpEvents = await fetch("http://localhost:5000/yelpEventSearch", {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         method: "POST",
  //         body: JSON.stringify({
  //           where,
  //           radius,
  //           startUnix,
  //           endUnix,
  //           event
  //         })
  //       });

  //       let yelpEventsData = (await yelpEvents.json()).events.filter(
  //         event => event.category !== "kids-family"
  //       );

  //       yelpEventsData.forEach(
  //         event => ((event.source = "yelp"), (event.type = "event"))
  //       );
  //       setEvents(yelpEventsData);
  //     } catch {
  //       error("yelpevents");
  //     }
  //     try {
  //       let ticketMasterEvents = await fetch(
  //         "http://localhost:5000/ticketMasterSearch",
  //         {
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json"
  //           },
  //           method: "POST",
  //           body: JSON.stringify({
  //             location,
  //             startFormatted,
  //             endFormatted,
  //             ticketmasterCategories
  //           })
  //         }
  //       );

  //       let ticketMasterResponse = await ticketMasterEvents.json();

  //       const { _embedded } = ticketMasterResponse;
  //       const { events } = _embedded;
  //       events.forEach(
  //         event => ((event.source = "ticketmaster"), (event.type = "event"))
  //       );
  //       notLoading("events");
  //       setEvents(events);
  //     } catch {
  //       notLoading("events");
  //       error("ticketmaster");
  //     }
  //   };
  // };

  useEffect(() => {
    setState(
      (state = {
        eventsCategory: "",
        radius: "",
        where: "",
        endDate: "",
        startDate: "",
        places: "",
        startFormatted: "",
        endFormatted: "",
        unixStartDate: "",
        unixEndDate: ""
      })
    );
  }, []);

  const { where, radius, endDate, startDate, places, eventsCategory } = state;

  const displaySearchType = () => {
    if (searchType.places && searchType.events) {
      return (
        <React.Fragment>
          <EventsSearch
            eventsCategory={eventsCategory}
            handleState={handleState}
          ></EventsSearch>
          <PlacesSearch
            places={places}
            handleState={handleState}
          ></PlacesSearch>
        </React.Fragment>
      );
    } else if (searchType.places === false && searchType.events) {
      return (
        <React.Fragment>
          <EventsSearch
            eventsCategory={eventsCategory}
            handleState={handleState}
          ></EventsSearch>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <PlacesSearch
            places={places}
            handleState={handleState}
          ></PlacesSearch>
        </React.Fragment>
      );
    }
  };

  return (
    <div className={`searchBoxWrapper ${css.searchBoxWrapper}`}>
      <form action="" onSubmit={handleSubmit}>
        <SearchSelector></SearchSelector>
        <WhereSelector
          where={where}
          radius={radius}
          handleState={handleState}
        ></WhereSelector>
        <WhenSelector
          startDate={startDate}
          endDate={endDate}
          handleState={handleState}
        ></WhenSelector>

        {displaySearchType()}

        <div
          className={`submitButton ${css.submitButton}`}
          onClick={handleSubmit}
        >
          <div className={`arrowWrapper ${css.arrowWrapper}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.3 55.54"
              className={`arrow ${css.arrow}`}
            >
              <title>Asset 6</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Tracing">
                  <polygon points="3.54 55.53 0 52 24.23 27.77 0 3.54 3.54 0 31.3 27.77 3.54 55.53" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
