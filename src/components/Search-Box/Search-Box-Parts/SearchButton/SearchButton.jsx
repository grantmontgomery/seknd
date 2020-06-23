import React, { useState } from "react";
import { Link } from "react-router-dom";
import { homeToSearch, handleSubmit } from "../../Logic";
import { useDispatch } from "react-redux";
import css from "./SearchButton.css";

const SearchButton = ({ query, searchType, componentLocation }) => {
  const dispatch = useDispatch();
  const nonLinked = () => {
    return (
      <div
        className={`${componentLocation} ${css[`${componentLocation}`]}`}
        onClick={(event) => handleSubmit(event, query, dispatch, searchType)}
      >
        <div className={`submitTitleWrapper ${css.submitTitleWrapper}`}>
          <span className={`submit ${css.submit}`}>SEARCH</span>
        </div>
      </div>
    );
  };

  const linked = () => {
    return (
      <div
        className={`linkedButton ${css.linkedButton} ${componentLocation} ${
          css[`${componentLocation}`]
        }`}
        onClick={(event) => handleSubmit(event, query, dispatch, searchType)}
      >
        <Link to="/search">
          <div className={`submitTitleWrapper ${css.submitTitleWrapper}`}>
            <span className={`submit ${css.submit}`}>SEARCH</span>
          </div>
        </Link>
      </div>
    );
  };
  const linkToPage = () => {
    return homeToSearch(searchType, query) === true ? linked() : nonLinked();
  };

  return componentLocation === "homePage" || componentLocation === "navBar"
    ? linkToPage()
    : nonLinked();
};

export default SearchButton;
