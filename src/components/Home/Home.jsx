import React, { useEffect, useState } from "react";
import { SearchBox } from "../Search-Box";
import css from "./Home.css";
import { useDispatch } from "react-redux";

import {
  FloatingPart,
  Schedule,
  Step,
  Works,
  Devices,
  Select,
  Search
} from "./Parts";
import { actions } from "../../redux";

const Home = () => {
  const dispatch = useDispatch();
  const { resultsActions } = actions;

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
  };

  useEffect(() => {
    resetReduxSearch();
  }, []);

  return (
    <div className={`homeWrapper ${css.homeWrapper}`}>
      <div className={`decorDiv ${css.decorDiv}`}></div>

      <div className={`homeHeaderWrapper ${css.homeHeaderWrapper}`}>
        <div className={`homeIntro ${css.homeIntro}`}>
          <div className={`sloganWrapper ${css.sloganWrapper}`}>
            <h1>LESS TIME LOOKING,</h1>
            <h1>MORE SECOND DATES</h1>
          </div>
          <div className={`subHeader ${css.subHeader}`}>
            <h2>YOU'VE GOT THE MATCH, NOW SET THE PERFECT DATE.</h2>
          </div>
        </div>
        <Devices></Devices>
        <Works></Works>
      </div>
      {/* <Search></Search>
      <Select></Select>
      <Schedule></Schedule> */}
    </div>
  );
};

export default Home;
