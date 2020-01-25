import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import css from "./Search-Box.css";
import { useSelector } from "react-redux";
import { actions } from "../../redux";
import { SearchSelector, WhereSelector } from "./Search-Box-Parts";
import { EventsSearch } from "../EventsSearch";
import { PlacesSearch } from "../PlacesSearch";
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = () => {
  const [state, setState] = useState({ input: "", startDate: "", endDate: "" });

  return (
    <div className={`searchBoxWrapper ${css.searchBoxWrapper}`}>
      <form action="">
        <SearchSelector></SearchSelector>
        <WhereSelector></WhereSelector>
        <div className={`secondSelectWrapper ${css.secondSelectWrapper}`}>
          <p>Where are you meeting?</p>
          <input
            className={`where ${css.where}`}
            placeholder="Los Angeles / 90015"
            type="text"
          />
          <select name="radius" id="" value={""}>
            <option value="">Select miles...</option>
            <option value="1610">Within 1 mile</option>
            <option value="8050">Within 5 miles</option>
            <option value="16100">Within 10 miles</option>
            <option value="40250">Within 25 miles</option>
          </select>
          <p>When are you meeting?</p>
          <p className={`from ${css.from}`}>From</p>

          <DatePicker
            name="date"
            autoComplete="off"
            selected={state.startDate}
            onChange={date => setState({ ...state, startDate: new Date(date) })}
            showTimeSelect
            minDate={new Date()}
            dateFormat="Pp"
          ></DatePicker>
          <p className={`to ${css.to}`}>To</p>
          <DatePicker
            name="date"
            autoComplete="off"
            selected={state.endDate}
            minDate={new Date()}
            onChange={date => setState({ ...state, endDate: new Date(date) })}
            showTimeSelect
            dateFormat="Pp"
          ></DatePicker>
        </div>
        <EventsSearch></EventsSearch>
        <PlacesSearch></PlacesSearch>
      </form>
    </div>
  );
};

export default SearchBox;
