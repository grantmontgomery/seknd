import React from "react";
import { EventsSearch } from "../../EventsSearch";
import { PlacesSearch } from "../../PlacesSearch";

const displaySearchType = (
  handleQuery,
  eventsCategory,
  places,
  searchType,
  componentLocation
) => {
  if (searchType.places && searchType.events) {
    return (
      <React.Fragment>
        <EventsSearch
          componentLocation={componentLocation}
          eventsCategory={eventsCategory}
          handleQuery={handleQuery}
        ></EventsSearch>
        <PlacesSearch
          places={places}
          handleQuery={handleQuery}
          componentLocation={componentLocation}
        ></PlacesSearch>
      </React.Fragment>
    );
  } else if (searchType.places === false && searchType.events) {
    return (
      <React.Fragment>
        <EventsSearch
          componentLocation={componentLocation}
          eventsCategory={eventsCategory}
          handleQuery={handleQuery}
        ></EventsSearch>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <PlacesSearch
          componentLocation={componentLocation}
          places={places}
          handleQuery={handleQuery}
        ></PlacesSearch>
      </React.Fragment>
    );
  }
};

export default displaySearchType;
