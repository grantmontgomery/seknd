import React from "react";
import DatePicker from "react-datepicker";
import css from "./Search-Box.css";

const SearchBox = () => {
  return (
    <div className={`searchBoxWrapper ${css.searchBoxWrapper}`}>
      <div className={`firstSelectWrapper ${css.firstSelectWrapper}`}>
        <div className={`firstSelectAll ${css.firstSelectAll}`}></div>
        <div className={`firstSelectEvents ${css.firstSelectEvents}`}></div>
        <div className={`firstSelectPlaces ${css.firstSelectPlaces}`}></div>
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
          showTimeSelect
          dateFormat="Pp"
        ></DatePicker>
        <p className={`to ${css.to}`}>To</p>
        <DatePicker
          name="date"
          autoComplete="off"
          showTimeSelect
          dateFormat="Pp"
        ></DatePicker>
      </div>
    </div>
  );
};

export default SearchBox;
