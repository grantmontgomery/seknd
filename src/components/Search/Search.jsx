import React, { useEffect } from "react";
import { SearchBox } from "../Search-Box";
import css from "./Search.css";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";

const Search = () => {
  const dispatch = useDispatch();
  const { inputActions, resultsActions } = actions;

  const resetReduxInput = () => {
    dispatch(inputActions.changeInputs("RESET_INPUT"));
  };

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
  };

  useEffect(() => {
    resetReduxInput();
    resetReduxSearch();
  }, []);

  return (
    <div className={`searchWrapper ${css.searchWrapper}`}>
      <div className={`sloganWrapper ${css.sloganWrapper}`}>
        <h1>LESS TIME LOOKING,</h1>
        <h1>MORE SECOND DATES</h1>
      </div>
      <div className={`emblemWrapper ${css.emblemWrapper}`}>
        <div className={`emblem ${css.emblem}`}></div>
        <div className={`emblem ${css.emblem}`}></div>
        <div className={`emblem ${css.emblem}`}></div>
      </div>
      <SearchBox></SearchBox>
    </div>
  );
};

export default Search;
