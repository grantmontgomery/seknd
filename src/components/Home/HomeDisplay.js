import React, { useEffect, useState, useRef, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./Home.css";

import { Schedule, Works, Devices, Select, Search } from "./Parts";

const HomeDisplay = ({ setSelectRef, setScheduleRef, setSearchRef }, ref) => {
  const {
    backgroundDiv,
    displayWrapper,
    search,
    select,
    schedule,
    devices,
    intro
  } = useSelector(state => state.homeScrollStylesReducer);

  const { navActions } = actions;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navActions("NAV_HOME"));
  }, []);
  const { width, height, left, top, borderRadius } = backgroundDiv;

  return (
    <div className={`homeWrapper ${css.homeWrapper}`}>
      <div
        className={`decorDiv ${css.decorDiv}`}
        style={{
          width: `${width}%`,
          height: `${height}%`,
          left: `${left}%`,
          top: `${top}%`,
          borderRadius: `${borderRadius}%`
        }}
      ></div>
      <div
        className={`displayWrapper ${css.displayWrapper}`}
        style={{ ...displayWrapper }}
      >
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
      <div className={`scrollWrapper ${css.scrollWrapper}`}>
        <div className={`headerScroll ${css.headerScroll}`} ref={ref}></div>
        <div
          className={`searchScroll ${css.searchScroll}`}
          ref={setSearchRef}
        ></div>
        <div
          className={`selectScroll ${css.selectScroll}`}
          ref={setSelectRef}
        ></div>
        <div
          className={`scheduleScroll ${css.scheduleScroll}`}
          ref={setScheduleRef}
        ></div>
      </div>
    </div>
  );
};

export default forwardRef(HomeDisplay);
