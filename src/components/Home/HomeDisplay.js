import React, { useEffect, useState, useRef, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./Home.css";

import { Schedule, Works, Devices, Select, Search } from "./Parts";

const HomeDisplay = (
  { setSelectRef, setScheduleRef, setSearchRef, setDevicesRef },
  ref
) => {
  const { backgroundDiv } = useSelector(state => state.homeScrollStylesReducer);
  console.log(backgroundDiv);
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
      <div className={`scrollWrapper ${css.scrollWrapper}`}>
        <div className={`homeHeaderWrapper ${css.homeHeaderWrapper}`} ref={ref}>
          <div className={`homeIntro ${css.homeIntro}`}>
            <div className={`sloganWrapper ${css.sloganWrapper}`}>
              <h1>LESS TIME LOOKING,</h1>
              <h1>MORE SECOND DATES</h1>
            </div>
            <div className={`subHeader ${css.subHeader}`}>
              <h2>YOU'VE GOT THE MATCH, NOW SET THE PERFECT DATE.</h2>
            </div>
          </div>
          <Devices ref={setDevicesRef}></Devices>
          <Works></Works>
        </div>
        <Search ref={setSearchRef}></Search>
        <Select ref={setSelectRef}></Select>
        <Schedule ref={setScheduleRef}></Schedule>
      </div>
    </div>
  );
};

export default forwardRef(HomeDisplay);
