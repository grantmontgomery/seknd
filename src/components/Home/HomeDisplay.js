import React, { useEffect, useState, useRef, forwardRef } from "react";
import { SearchBox } from "../Search-Box";
import css from "./Home.css";
import { useDispatch, useSelector } from "react-redux";

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

const HomeDisplay = ({
  setHeaderRef,
  setSelectRef,
  setScheduleRef,
  setSearchRef,
  setDevicesRef
}) => {
  return (
    <div className={`homeWrapper ${css.homeWrapper}`}>
      <div className={`decorDiv ${css.decorDiv}`}></div>

      <div
        className={`homeHeaderWrapper ${css.homeHeaderWrapper}`}
        ref={setHeaderRef}
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
        <Devices ref={setDevicesRef}></Devices>
        <Works></Works>
      </div>
      <Search ref={setSearchRef}></Search>
      <Select ref={setSelectRef}></Select>
      <Schedule ref={setScheduleRef}></Schedule>
    </div>
  );
};

export default forwardRef(HomeDisplay);
