import React from "react";
import css from "./HourSection.css";

const HourSection = ({ time }) => {
  console.log(time);

  return (
    <div className={`sectionWrapper ${css.sectionWrapper}`}>
      <div className={`timeWrapper ${css.timeWrapper}`}>{`${time}`}</div>
    </div>
  );
};

export default HourSection;
