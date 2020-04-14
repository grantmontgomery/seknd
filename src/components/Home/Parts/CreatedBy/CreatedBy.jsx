import React from "react";
import css from "./CreatedBy.css";

const CreatedBy = () => {
  return (
    <div className={`createdByWrapper ${css.createdByWrapper}`}>
      <div className={`descriptor ${css.descriptor}`}>Created by </div>
      <div className={`descriptor ${css.descriptor}`}> </div>
      <a href="">Grant</a>
    </div>
  );
};

export default CreatedBy;
