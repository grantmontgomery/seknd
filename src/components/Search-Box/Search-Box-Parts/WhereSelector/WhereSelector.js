import React, { useCallback } from "react";
import css from "./WhereSelector.css";

const WhereSelector = ({ location, radius, handleQuery, style }) => {
  const handleWhere = useCallback(
    event => {
      const location = event.target.value;
      handleQuery({ location });
    },
    [location]
  );

  const handleRadius = useCallback(
    event => {
      const radius = event.target.value;
      handleQuery({ radius });
    },
    [radius]
  );
  return (
    // <div className={`${style} ${css[`${style}`]}`}>
    //   <div className={`whereSelectWrapper ${css.whereSelectWrapper} `}>
    //     <p>Where are you meeting?</p>
    //     <input
    //       className={`where ${css.where}`}
    //       placeholder="Los Angeles / 90015"
    //       value={location}
    //       type="text"
    //       onChange={event => handleWhere(event)}
    //     />
    //     <select
    //       name="radius"
    //       value={radius}
    //       onChange={event => handleRadius(event)}
    //     >
    //       <option value="">Search radius...</option>
    //       <option value="1610">Within 1 mile</option>
    //       <option value="8050">Within 5 miles</option>
    //       <option value="16100">Within 10 miles</option>
    //       <option value="40250">Within 25 miles</option>
    //     </select>
    //   </div>
    // </div>

    <div
      className={`whereSelectWrapper ${css.whereSelectWrapper} ${style} ${
        css[`${style}`]
      }`}
    >
      <span>Where are you meeting?</span>
      <input
        className={`where ${css.where}`}
        placeholder="Los Angeles / 90015"
        value={location}
        type="text"
        onChange={event => handleWhere(event)}
      />
      <select
        name="radius"
        value={radius}
        onChange={event => handleRadius(event)}
      >
        <option value="">Search radius...</option>
        <option value="1610">Within 1 mile</option>
        <option value="8050">Within 5 miles</option>
        <option value="16100">Within 10 miles</option>
        <option value="40250">Within 25 miles</option>
      </select>
    </div>
  );
};

export default WhereSelector;
