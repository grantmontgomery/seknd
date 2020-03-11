import React, { useState } from "react";
import { setHourSections } from "./Logic";
import { HourSection } from "../HourSection";
import css from "./HoursHeader.css";
import setHoursSections from "./Logic/setHourSections";
import { actions } from "../../../../redux";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const HoursHeader = () => {
  let [hours, setHours] = useState([]);
  const gridTimes = useSelector(state => state.dateGridReducer);
  const dispatch = useDispatch();
  const { hoursActions } = actions;

  useEffect(() => {
    setHours(setHoursSections(gridTimes));
    dispatch(
      hoursActions({
        type: "ADD_HOURS_LOGIC",
        payload: setHoursSections(gridTimes)
      })
    );
  }, []);

  return (
    <div className={`hoursHeaderWrapper ${css.hoursHeaderWrapper}`}>
      {hours.map(time => {
        return <HourSection time={time}></HourSection>;
      })}
    </div>
  );
};

export default HoursHeader;
