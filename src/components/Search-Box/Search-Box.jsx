import React, { useState, useEffect } from "react";
import css from "./Search-Box.css";
import {
  SearchSelector,
  WhereSelector,
  WhenSelector
} from "./Search-Box-Parts";
import { EventsSearch } from "../EventsSearch";
import { PlacesSearch } from "../PlacesSearch";
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = () => {
  const [state, setState] = useState({
    eventsCategory: "",
    radius: "",
    where: "",
    endDate: "",
    startDate: "",
    places: ""
  });

  const handleState = input => {
    setState(state => ({
      ...state,
      input
    }));
  };

  console.log(state);

  return (
    <div className={`searchBoxWrapper ${css.searchBoxWrapper}`}>
      <form action="">
        <SearchSelector></SearchSelector>
        <WhereSelector handleState={handleState}></WhereSelector>
        <WhenSelector handleState={handleState}></WhenSelector>
        <EventsSearch handleState={handleState}></EventsSearch>
        <PlacesSearch handleState={handleState}></PlacesSearch>
        <div className={`submitButton ${css.submitButton}`}>
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
