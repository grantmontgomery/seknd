import React, { useState, useEffect } from "react";
import css from "./Search-Box.css";
import {
  SearchSelector,
  WhereSelector,
  WhenSelector
} from "./Search-Box-Parts";
import { EventsSearch } from "../EventsSearch";
import { PlacesSearch } from "../PlacesSearch";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = () => {
  let [state, setState] = useState({
    eventsCategory: "",
    radius: "",
    where: "",
    endDate: "",
    startDate: "",
    places: ""
  });

  const handleState = input => {
    const key = Object.keys(input).join();
    const value = Object.values(input).join();
    setState(state => ({
      ...state,
      [key]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setState(
      (state = {
        eventsCategory: "",
        radius: "",
        where: "",
        endDate: "",
        startDate: "",
        places: ""
      })
    );
  };

  useEffect(() => {
    setState(
      (state = {
        eventsCategory: "",
        radius: "",
        where: "",
        endDate: "",
        startDate: "",
        places: ""
      })
    );
  }, []);

  const { where, radius, endDate, startDate, places, eventsCategory } = state;

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
        <EventsSearch
          eventsCategory={eventsCategory}
          handleState={handleState}
        ></EventsSearch>
        <PlacesSearch places={places} handleState={handleState}></PlacesSearch>
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
