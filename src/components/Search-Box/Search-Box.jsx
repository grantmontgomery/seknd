import React, { useState, useEffect } from "react";
import Cocktail from "../../assets/cocktail.svg";
import Dj from "../../assets/dj.svg";

import DatePicker from "react-datepicker";
import css from "./Search-Box.css";
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = () => {
  const [state, setState] = useState({ input: "", startDate: "", endDate: "" });
  console.log(state);
  return (
    <div className={`searchBoxWrapper ${css.searchBoxWrapper}`}>
      <div className={`firstSelectWrapper ${css.firstSelectWrapper}`}>
        <div className={`firstSelectAll ${css.firstSelectAll}`}>
          <div
            className={`firstSelectImagesWrapperAll ${css.firstSelectImagesWrapperAll}`}
          >
            {" "}
            <div
              className={`firstSelectImageWrapper ${css.firstSelectImageWrapperAll}`}
            >
              <img src={Cocktail} alt="" />
            </div>
            <div
              className={`firstSelectImageWrapper ${css.firstSelectImageWrapperAll}`}
            >
              <img src={Dj} alt="" />
            </div>
            <div
              className={`firstSelectTextWrapper ${css.firstSelectTextWrapper}`}
            >
              <p>All</p>
            </div>
          </div>
        </div>

        <div className={`firstSelectEvents ${css.firstSelectEvents}`}>
          {" "}
          <div
            className={`firstSelectImageWrapper ${css.firstSelectImageWrapper}`}
          >
            <img src={Dj} alt="" />
          </div>
          <div
            className={`firstSelectTextWrapper ${css.firstSelectTextWrapper}`}
          >
            <p>Events</p>
          </div>
        </div>
        <div className={`firstSelectPlaces ${css.firstSelectPlaces}`}>
          <div
            className={`firstSelectImageWrapper ${css.firstSelectImageWrapper}`}
          >
            <img src={Cocktail} alt="" />
          </div>
          <div
            className={`firstSelectTextWrapper ${css.firstSelectTextWrapper}`}
          >
            <p>Places</p>
          </div>
        </div>
      </div>
      <div className={`secondSelectWrapper ${css.secondSelectWrapper}`}>
        <p>Where are you meeting?</p>
        <input
          className={`where ${css.where}`}
          placeholder="Los Angeles / 90015"
          type="text"
        />
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
    </div>
  );
};

export default SearchBox;
