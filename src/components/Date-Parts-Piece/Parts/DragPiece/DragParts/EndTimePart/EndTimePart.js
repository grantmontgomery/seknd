import React, { useState } from "react";
import css from "./EndTimePart.css";

const EndTimePart = ({ width }) => {
  let [timeLength, setLength] = useState("");
  return (
    <div className={`endTimeWrapper ${css.endTimeWrapper}`}>
      <div className={`endTimeSelector ${css.endTimeSelector}`}>
        <select
          name="radius"
          value={timeLength}
          onChange={event => setLength(event.target.value)}
        >
          <option value="">Time Length</option>
          <option value="1 hour">1 hour</option>
          <option value="1 hour 30 minutes">1 hour 30 minutes</option>
          <option value="2 hours">2 hours</option>
          <option value="3 hours">3 hours</option>
          <option value="Until the end.">Until the end.</option>
        </select>
      </div>
    </div>
  );
};

export default EndTimePart;
