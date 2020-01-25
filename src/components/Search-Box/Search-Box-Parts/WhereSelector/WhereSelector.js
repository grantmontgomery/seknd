import React from "react";
import css from "./WhereSelector.css";

const WhereSelector = () => {
  return (
    <div className={`whereSelectWrapper ${css.whereSelectWrapper}`}>
      <p>Where are you meeting?</p>
      <input
        className={`where ${css.where}`}
        placeholder="Los Angeles / 90015"
        type="text"
      />
      <select name="radius" id="" value={""}>
        <option value="">Select miles...</option>
        <option value="1610">Within 1 mile</option>
        <option value="8050">Within 5 miles</option>
        <option value="16100">Within 10 miles</option>
        <option value="40250">Within 25 miles</option>
      </select>
    </div>
  );
};

export default WhereSelector;
