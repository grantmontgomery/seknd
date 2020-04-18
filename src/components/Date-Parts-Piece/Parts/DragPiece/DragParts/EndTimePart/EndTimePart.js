import React, { useState, useRef } from "react";
import css from "./EndTimePart.css";
import { useEffect } from "react";

const EndTimePart = ({ changeLength, timeLength }) => {
  let [localLength, setLength] = useState("");
  // const [select, setRef] = useRef();

  useEffect(() => {
    setLength(timeLength);
  }, []);

  const handleChange = ({ target }) => {
    const pixels = target.getAttribute("pixels");
    console.log(pixels);
    setLength(target.value);
    console.log(target.value);
    changeLength(target.value, pixels);
  };

  return (
    <div className={`endTimeWrapper ${css.endTimeWrapper}`}>
      <div className={`endTimeSelector ${css.endTimeSelector}`}>
        <select
          name="radius"
          value={localLength}
          onChange={handleChange}
          // ref={setRef}
        >
          <option value="">Set Time Length...</option>
          <option value={"1 hour"} pixels={200}>
            1 hour
          </option>
          <option value={"1 hour and 30 minutes"} pixels={300}>
            1 hour 30 minutes
          </option>
          <option value={"2 hours"} pixels={400}>
            2 hours
          </option>
          <option value={"3 hours"} pixels={600}>
            3 hours
          </option>
          {/* Working on a way to calculate the rest of the pixels until the end. Until then I'll be using 800 pixels as a sit in replacement. */}

          <option value="Until the end." pixels={800}>
            Until the end.
          </option>
        </select>
      </div>
    </div>
  );
};

export default EndTimePart;
