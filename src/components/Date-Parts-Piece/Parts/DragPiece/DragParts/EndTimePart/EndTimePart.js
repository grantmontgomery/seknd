import React, { useState } from "react";
import css from "./EndTimePart.css";
import { useEffect } from "react";

const EndTimePart = ({ changeLength, timeLength }) => {
  let [localLength, setLength] = useState("");

  useEffect(() => {
    setLength(timeLength);
  });

  const handleChange = ({ target }) => {
    setLength(target.value.string);
    timeLength = target.value.string;
    changeLength(target.value);
  };

  return (
    <div className={`endTimeWrapper ${css.endTimeWrapper}`}>
      <div className={`endTimeSelector ${css.endTimeSelector}`}>
        <select name="radius" value={timeLength} onChange={handleChange}>
          <option value="">Set Time Length...</option>
          <option value={{ pixels: 200, string: "1 hour" }}>1 hour</option>
          <option value={{ pixels: 300, string: "1 hour and 30 minutes" }}>
            1 hour 30 minutes
          </option>
          <option value={{ pixels: 400, string: "2 hours" }}>2 hours</option>
          <option value={{ pixels: 600, string: "3 hours" }}>3 hours</option>
          <option value="Until the end.">Until the end.</option>
        </select>
      </div>
    </div>
  );
};

export default EndTimePart;
