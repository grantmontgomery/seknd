import React, { useEffect, useState, useRef, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./Home.css";

import { Schedule, Works, Devices, Select, Search, Intro } from "./Parts";
import { transform } from "@babel/core";

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
          borderRadius: `${borderRadius}%`,
          transform: `${width === 50 ? "translateY(-50%)" : "translateY(0)"}`
        }}
      ></div>
      <div
        className={`displayWrapper ${css.displayWrapper}`}
        style={{ ...displayWrapper }}
      >
        <Intro render={intro.render}></Intro>
        <Devices render={devices.render}></Devices>
        <Search render={search.render}></Search>
        <Select render={select.render}></Select>
        <Schedule render={schedule.render}></Schedule>
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
