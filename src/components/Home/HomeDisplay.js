import React, { useEffect, useState, useRef, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./Home.css";

import {
  Schedule,
  Works,
  CreatedBy,
  Devices,
  ScrollPosition,
  SocialMedia,
  Select,
  Search,
  Pointer,
  Intro,
  Header,
} from "./Parts";
import { transform } from "@babel/core";
import { SearchBox } from "../Search-Box";

const HomeDisplay = (
  {
    setSelectRef,
    setScheduleRef,
    setSearchRef,
    setHeaderBufferRef,
    setSearchBufferRef,
    setSelectBufferRef,
  },
  ref
) => {
  // const {
  //   backgroundDiv,
  //   displayWrapper,
  //   search,
  //   select,
  //   schedule,
  //   header,
  //   devices,
  //   intro,
  // } = useSelector((state) => state.homeScrollStylesReducer);

  const {
    desktop: {
      backgroundDiv,
      displayWrapper,
      search,
      select,
      schedule,
      header,
      devices,
      intro,
    },
  } = useSelector((state) => state.homeScrollStylesReducer);

  const { navActions } = actions;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navActions("NAV_HOME"));
  }, []);

  const renderSearchBox = ({ render }) => {
    return render === true ? (
      <SearchBox componentLocation="homePage"></SearchBox>
    ) : null;
  };

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
          transform: `${width === 50 ? "translateY(-50%)" : "translateY(0)"}`,
        }}
      ></div>
      <div
        className={`mobileDecor ${css.mobileDecor}`}
        style={{
          width: `${width + 10}%`,
          height: `${height - 50}%`,
          left: `${left}%`,
          top: `${top}%`,
          borderRadius: `${borderRadius}%`,
          transform: `${width === 50 ? "translateY(-50%)" : "translateY(0)"}`,
        }}
      ></div>
      <div className={`displayWrapper ${css.displayWrapper}`} style={{}}>
        {" "}
        <CreatedBy location="homePage"></CreatedBy>
        <Works></Works>
        <Pointer></Pointer>
        <ScrollPosition></ScrollPosition>
        <SocialMedia location="homePage"></SocialMedia>
        <Header render={header.render}></Header>
        <Search render={search.render}></Search>
        {renderSearchBox(search)}
        <Select render={select.render}></Select>
        <Schedule render={schedule.render}></Schedule>
      </div>
      <div className={`scrollWrapper ${css.scrollWrapper}`}>
        <div className={`headerScroll ${css.headerScroll}`} ref={ref}></div>
        <div
          className={`transitionBuffer ${css.transitionBuffer}`}
          top="header"
          ref={setHeaderBufferRef}
          top="header"
        ></div>
        <div
          className={`searchScroll ${css.searchScroll}`}
          ref={setSearchRef}
        ></div>
        <div
          className={`transitionBuffer ${css.transitionBuffer}`}
          ref={setSearchBufferRef}
          top="search"
        ></div>
        <div
          className={`selectScroll ${css.selectScroll}`}
          ref={setSelectRef}
        ></div>
        <div
          className={`transitionBuffer ${css.transitionBuffer}`}
          ref={setSelectBufferRef}
          top="select"
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
