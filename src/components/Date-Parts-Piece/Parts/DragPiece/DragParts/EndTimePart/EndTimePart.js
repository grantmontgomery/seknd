import React, { useState, useRef } from "react";
import css from "./EndTimePart.css";
import { MobileInnerInfo } from "../../../MobileDragPiece/Parts";
import { optionPixels } from "./Logic";
import { useEffect } from "react";

const EndTimePart = ({ changeLength, timeLength, timeString, name }) => {
  let [localLength, setLength] = useState("");
  const selectEl = useRef(null);

  useEffect(() => {
    setLength(timeLength);
  }, []);

  const handleChange = ({ target }) => {
    selectEl.current.focus();
    const options = selectEl.current.children;
    const timeString = target.value;

    setLength(target.value);
    changeLength(timeString, optionPixels(options, timeString));
  };

  return (
    <div className={`endTimeWrapper ${css.endTimeWrapper}`}>
      <MobileInnerInfo name={name}></MobileInnerInfo>
      <div className={`endTimeSelector ${css.endTimeSelector}`}>
        <select value={timeString} onChange={handleChange} ref={selectEl}>
          <option value="" pixels={200}>
            Set Time Length...
          </option>
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

          <option value="Until the end." pixels={800}>
            Until the end.
          </option>
        </select>
      </div>
    </div>
  );
};

export default EndTimePart;
