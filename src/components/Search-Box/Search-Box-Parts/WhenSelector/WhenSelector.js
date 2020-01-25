import React, { useState } from "react";
import DatePicker from "react-datepicker";
import css from "./WhenSelector.css";

const WhenSelector = () => {
  const [state, setState] = useState({ input: "", startDate: "", endDate: "" });

  return (
    <div className={`whenSelectWrapper ${css.whenSelectWrapper}`}>
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
  );
};

export default WhenSelector;
