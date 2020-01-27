import React, { useState } from "react";
import DatePicker from "react-datepicker";
import css from "./WhenSelector.css";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../../redux";

const WhenSelector = props => {
  const { inputActions } = actions;
  const dispatch = useDispatch();
  console.log(actions);
  let [startDate, setStart] = useState("");
  let [endDate, setEnd] = useState("");

  const handleStart = useCallback(
    (date, startDate) => {
      startDate = new Date(date);
      return startDate;
    },
    [startDate]
  );

  const handleEnd = useCallback(
    (date, endDate) => {
      endDate = new Date(date);
      dispatch(inputActions.changeInputs({ endDate: endDate }));
      return endDate;
    },
    [endDate]
  );

  return (
    <div className={`whenSelectWrapper ${css.whenSelectWrapper}`}>
      <p>When are you meeting?</p>
      <p className={`from ${css.from}`}>From</p>
      <DatePicker
        name="date"
        autoComplete="off"
        selected={startDate}
        onChange={date => setStart(handleStart(date, startDate))}
        showTimeSelect
        minDate={new Date()}
        dateFormat="Pp"
      ></DatePicker>
      <p className={`to ${css.to}`}>To</p>
      <DatePicker
        name="date"
        autoComplete="off"
        selected={endDate}
        minDate={new Date()}
        onChange={date => setEnd(handleEnd(date, endDate))}
        showTimeSelect
        dateFormat="Pp"
      ></DatePicker>
    </div>
  );
};

export default WhenSelector;
