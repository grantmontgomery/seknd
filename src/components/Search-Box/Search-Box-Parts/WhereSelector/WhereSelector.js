import React, { useCallback } from "react";
import css from "./WhereSelector.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../../redux";

const WhereSelector = props => {
  let [where, setWhere] = useState("");
  let [radius, setRadius] = useState("");
  const dispatch = useDispatch();
  const { inputActions } = actions;
  const handleWhere = useCallback(
    (event, where) => {
      where = event.target.value;
      dispatch(inputActions.changeInputs({ where }));
      // props.handleState(where);
      return where;
    },
    [where]
  );

  const handleRadius = useCallback(
    (event, radius) => {
      radius = event.target.value;
      dispatch(inputActions.changeInputs({ radius }));
      // props.handleState({ radius });

      return radius;
    },
    [radius]
  );
  return (
    <div className={`whereSelectWrapper ${css.whereSelectWrapper}`}>
      <p>Where are you meeting?</p>
      <input
        className={`where ${css.where}`}
        placeholder="Los Angeles / 90015"
        value={where}
        type="text"
        onChange={event => setWhere(handleWhere(event, where))}
      />
      <select
        name="radius"
        id=""
        value={radius}
        onChange={event => setRadius(handleRadius(event, radius))}
      >
        <option value="">Select radius...</option>
        <option value="1610">Within 1 mile</option>
        <option value="8050">Within 5 miles</option>
        <option value="16100">Within 10 miles</option>
        <option value="40250">Within 25 miles</option>
      </select>
    </div>
  );
};

export default WhereSelector;
