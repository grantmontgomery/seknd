import React from "react";
import css from "./SchedulerPage.css";

import { SchedulerScroll } from "./Parts";
import { SchedulerGrid } from "../Scheduler-Grid";
import { SavedDates } from "../SavedDates";
import { actions } from "../../redux";
import { DateParts } from "../Date-Parts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SchedulerPage = () => {
  const { navActions } = actions;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navActions("NAV_OTHER"));
  }, []);
  return (
    <div className={`schedulerWrapper ${css.schedulerWrapper}`}>
      <SchedulerScroll></SchedulerScroll>
      <DateParts page="scheduler" />
      <SchedulerGrid></SchedulerGrid>
      <SavedDates></SavedDates>
    </div>
  );
};

export default SchedulerPage;
