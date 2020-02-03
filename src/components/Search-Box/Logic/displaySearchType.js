import React from "react";
import { EventsSearch } from "../../EventsSearch";
import { PlacesSearch } from "../../PlacesSearch";

const displaySearchType = (handleState, eventsCategory, places, searchType) => {
  if (searchType.places && searchType.events) {
    return (
      <React.Fragment>
        <EventsSearch
          eventsCategory={eventsCategory}
          handleState={handleState}
        ></EventsSearch>
        <PlacesSearch places={places} handleState={handleState}></PlacesSearch>
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
        <PlacesSearch places={places} handleState={handleState}></PlacesSearch>
      </React.Fragment>
    );
  }
};

export default displaySearchType;
