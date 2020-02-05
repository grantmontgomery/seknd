import React from "react";
import { SearchResultsBarLabel } from "../../Search-Results-Bar-Label";
import { SearchResultsBar } from "../../Search-Results-Bar";

const defineSearchBars = ({ places, events }) => {
  if (places && !events) {
    return (
      <React.Fragment>
        <SearchResultsBarLabel type={"places"}></SearchResultsBarLabel>
        <SearchResultsBar type={"places"}></SearchResultsBar>
      </React.Fragment>
    );
  } else if (!places && events) {
    return (
      <React.Fragment>
        <SearchResultsBarLabel type={"events"}></SearchResultsBarLabel>
        <SearchResultsBar type={"events"}></SearchResultsBar>
      </React.Fragment>
    );
  } else if (places && events) {
    return (
      <React.Fragment>
        <SearchResultsBarLabel type={"places"}></SearchResultsBarLabel>
        <SearchResultsBar type={"places"}></SearchResultsBar>
        <SearchResultsBarLabel type={"events"}></SearchResultsBarLabel>
        <SearchResultsBar type={"events"}></SearchResultsBar>
      </React.Fragment>
    );
  }
};

export default defineSearchBars;
