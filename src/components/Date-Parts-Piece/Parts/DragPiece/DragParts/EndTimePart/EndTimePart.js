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
          <option value="">Set Time Length...</option>
          <option value={200}>1 hour</option>
          <option value={300}>1 hour 30 minutes</option>
          <option value={400}>2 hours</option>
          <option value={600}>3 hours</option>
          <option value="Until the end.">Until the end.</option>
        </select>
      </div>
    </div>
  );
};

export default EndTimePart;
