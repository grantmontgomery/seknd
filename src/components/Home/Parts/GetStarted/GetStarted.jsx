import React from "react";
import { useSelector } from "react-redux";
import css from "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className={`getStartedWrapper ${css.getStartedWrapper}`}>
      <div className={`textWrapper ${css.textWrapper}`}>
        Start with a Search
      </div>
    </div>
  );
};

export default GetStarted;
