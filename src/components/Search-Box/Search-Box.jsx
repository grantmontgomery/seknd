import React, { useState, useEffect } from "react";
import css from "./Search-Box.css";
import {
  SearchSelector,
  WhereSelector,
  WhenSelector
} from "./Search-Box-Parts";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit, displaySearchType } from "./Logic";
import { CSSTransition, TransitionGroup } from "react-transition-group";

require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = () => {
  const searchType = useSelector(state => state.resultsReducers);

  const dispatch = useDispatch();
  let [state, setState] = useState({
    eventsCategory: "",
    radius: "",
    location: "",
    endDate: "",
    startDate: "",
    places: "",
    startFormatted: "",
    endFormatted: "",
    unixStartDate: "",
    unixEndDate: "",
    ticketMasterCategories: "",
    yelpCategories: ""
  });

  const handleState = input => {
    setState(state => ({
      ...state,
      ...input
    }));
  };

  console.log(state);

  useEffect(() => {
    setState(
      (state = {
        eventsCategory: "",
        radius: "",
        location: "",
        endDate: "",
        startDate: "",
        places: "",
        startFormatted: "",
        endFormatted: "",
        unixStartDate: "",
        unixEndDate: "",
        ticketMasterCategories: "",
        yelpCategories: ""
      })
    );
  }, []);
  const {
    location,
    radius,
    endDate,
    startDate,
    places,
    eventsCategory
  } = state;

  return (
    <div className={`searchBoxWrapper ${css.searchBoxWrapper}`}>
      <form
        action=""
        onSubmit={event => handleSubmit(event, state, dispatch, searchType)}
      >
        <SearchSelector></SearchSelector>
        <WhereSelector
          location={location}
          radius={radius}
          handleState={handleState}
        ></WhereSelector>
        <WhenSelector
          startDate={startDate}
          endDate={endDate}
          handleState={handleState}
        ></WhenSelector>

        {displaySearchType(handleState, eventsCategory, places, searchType)}

        <div
          className={`submitButton ${css.submitButton}`}
          onClick={event => handleSubmit(event, state, dispatch, searchType)}
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
