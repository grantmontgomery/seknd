import React, { useCallback } from "react";
import css from "./WhereSelector.css";

const WhereSelector = props => {
  const { where, radius, handleState } = props;
  const handleWhere = useCallback(
    event => {
      const where = event.target.value;
      handleState({ where });
    },
    [props]
  );

  const handleRadius = useCallback(
    event => {
      const radius = event.target.value;
      props.handleState({ radius });
    },
    [props]
  );
  return (
    <div className={`whereSelectWrapper ${css.whereSelectWrapper}`}>
      <p>Where are you meeting?</p>
      <input
        className={`where ${css.where}`}
        placeholder="Los Angeles / 90015"
        value={where}
        type="text"
        onChange={event => handleWhere(event)}
      />
      <select
        name="radius"
        id=""
        value={radius}
        onChange={event => handleRadius(event)}
      >
        <option value="">Select search radius...</option>
        <option value="1610">Within 1 mile</option>
        <option value="8050">Within 5 miles</option>
        <option value="16100">Within 10 miles</option>
        <option value="40250">Within 25 miles</option>
      </select>
    </div>
  );
};

export default WhereSelector;
