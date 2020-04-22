import React from "react";
import css from "./SchedulerPage.css";

import { SchedulerScroll, SchedulerDrag } from "./Parts";
import { SchedulerGrid } from "../Scheduler-Grid";
import { SavedDates } from "../SavedDates";
import { actions } from "../../redux";
import { DateParts } from "../Date-Parts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const SchedulerPage = () => {
  const { navActions } = actions;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navActions("NAV_OTHER"));
  }, []);

  const [state, setState] = useState({ scroll: false, drag: false });

  const displayScroll = (input) => {
    input === "enter"
      ? setState({ ...state, scroll: true })
      : setState({ ...state, scroll: false });
  };

  const displayDrag = (input) => {
    input === "enter"
      ? setState({ ...state, drag: true })
      : setState({ ...state, drag: false });
  };

  const { scroll, drag } = state;

  return (
    <div className={`schedulerWrapper ${css.schedulerWrapper}`}>
      <SchedulerScroll scroll={scroll}></SchedulerScroll>
      <SchedulerDrag drag={drag}></SchedulerDrag>
      <DateParts displayDrag={displayDrag} page="scheduler" />
      <SchedulerGrid displayScroll={displayScroll}></SchedulerGrid>
      <SavedDates></SavedDates>
    </div>
  );
};

export default SchedulerPage;
