import React from "react";
import { setHourSections } from "./Logic";
import { HourSection } from "../HourSection";
import css from "./HoursHeader.css";
import setHoursSections from "./Logic/setHourSections";
import { useSelector } from "react-redux";

const HoursHeader = () => {
  const gridTimes = useSelector(state => state.dateGridReducer);

  return (
    <div className={`hoursHeaderWrapper ${css.hoursHeaderWrapper}`}>
      {setHoursSections(gridTimes).map(time => {
        return <HourSection time={time}></HourSection>;
      })}
    </div>
  );
};

export default HoursHeader;
