import React from "react";
import { SearchResultsBarLabel } from "../../Search-Results-Bar-Label";
import { SearchResultsBar } from "../../Search-Results-Bar";
import css from "../Search.css";
import { useSelector } from "react-redux";

const defineSearchBars = ({ places, events }, Events, Places) => {
  if (places && !events) {
    return (
      <React.Fragment>
        <div className={`placesWrapper ${css.placesWrapper}`}>
          <SearchResultsBarLabel type={"places"}></SearchResultsBarLabel>
          <SearchResultsBar type={"places"} content={Places}></SearchResultsBar>
        </div>
      </React.Fragment>
    );
  } else if (!places && events) {
    return (
      <React.Fragment>
        <div className={`eventsWrapper ${css.eventsWrapper}`}>
          <SearchResultsBarLabel type={"events"}></SearchResultsBarLabel>
          <SearchResultsBar type={"events"} content={Events}></SearchResultsBar>
        </div>
      </React.Fragment>
    );
  } else if (places && events) {
    return (
      <React.Fragment>
        <div className={`placesWrapper ${css.placesWrapper}`}>
          <SearchResultsBarLabel type={"places"}></SearchResultsBarLabel>
          <SearchResultsBar type={"places"} content={Places}></SearchResultsBar>
        </div>
        <div className={`eventsWrapper ${css.eventsWrapper}`}>
          <SearchResultsBarLabel type={"events"}></SearchResultsBarLabel>
          <SearchResultsBar type={"events"} content={Events}></SearchResultsBar>
        </div>
      </React.Fragment>
    );
  }
};

export default defineSearchBars;
