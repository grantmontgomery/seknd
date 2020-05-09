import React from "react";
import css from "./CreatedBy.css";

const CreatedBy = ({ location }) => {
  return (
    <div
      className={`createdByWrapper ${css.createdByWrapper} ${location} ${
        css[`${location}`]
      }`}
    >
      <div className={`descriptor ${css.descriptor}`}>Created by </div>
      <div className={`descriptor ${css.descriptor}`}> </div>
      <a href="">Grant</a>
    </div>
  );
};

export default CreatedBy;
