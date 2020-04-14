import React from "react";
import { useSelector } from "react-redux";
import css from "./GetStarted.css";

const GetStarted = () => {
  const toSearch = () => {
    const search = document.getElementsByClassName("searchScroll")[0];
    return search.scrollIntoView(true);
  };

  return (
    <div
      className={`getStartedWrapper ${css.getStartedWrapper}`}
      onClick={toSearch}
    >
      <div className={`textWrapper ${css.textWrapper}`}>
        Click here to get started.
      </div>
    </div>
  );
};

export default GetStarted;
