import React from "react";
import { EventsSearch } from "../../EventsSearch";
import { PlacesSearch } from "../../PlacesSearch";

const displaySearchType = (handleQuery, eventsCategory, places, searchType) => {
  if (searchType.places && searchType.events) {
    return (
      <React.Fragment>
        <EventsSearch
          eventsCategory={eventsCategory}
          handleQuery={handleQuery}
        ></EventsSearch>
        <PlacesSearch places={places} handleQuery={handleQuery}></PlacesSearch>
      </React.Fragment>
    );
  } else if (searchType.places === false && searchType.events) {
    return (
      <React.Fragment>
        <EventsSearch
          eventsCategory={eventsCategory}
          handleQuery={handleQuery}
        ></EventsSearch>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <PlacesSearch places={places} handleQuery={handleQuery}></PlacesSearch>
      </React.Fragment>
    );
  }
};

export default displaySearchType;
