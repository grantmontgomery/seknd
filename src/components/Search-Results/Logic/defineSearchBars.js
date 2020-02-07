import React from "react";
import { SearchResultsBarLabel } from "../../Search-Results-Bar-Label";
import { SearchResultsBar } from "../../Search-Results-Bar";
import { useSelector } from "react-redux";

const defineSearchBars = ({ places, events }, Events, Places) => {
  if (places && !events) {
    return (
      <React.Fragment>
        <SearchResultsBarLabel type={"places"}></SearchResultsBarLabel>
        <SearchResultsBar type={"places"} content={Places}></SearchResultsBar>
      </React.Fragment>
    );
  } else if (!places && events) {
    return (
      <React.Fragment>
        <SearchResultsBarLabel type={"events"}></SearchResultsBarLabel>
        <SearchResultsBar type={"events"} content={Events}></SearchResultsBar>
      </React.Fragment>
    );
  } else if (places && events) {
    return (
      <React.Fragment>
        <SearchResultsBarLabel type={"places"}></SearchResultsBarLabel>
        <SearchResultsBar type={"places"} content={Places}></SearchResultsBar>
        <SearchResultsBarLabel type={"events"}></SearchResultsBarLabel>
        <SearchResultsBar type={"events"} content={Events}></SearchResultsBar>
      </React.Fragment>
    );
  }
};

export default defineSearchBars;
