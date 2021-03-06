import React from "react";
import css from "./SchedulerPage.css";
import { SchedulerScroll, SchedulerDrag, MobileSelector } from "./Parts";
import { SchedulerGrid } from "../Scheduler-Grid";
import { SavedDates } from "../SavedDates";
import { actions } from "../../redux";
import { DateParts } from "../Date-Parts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SchedulerPage = () => {
  const { navActions } = actions;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navActions("NAV_OTHER"));
  }, []);
  const [state, setState] = useState({ scroll: false, drag: false });

  const grid = useSelector((state) => state.dateGridReducer);
  const { start, end } = grid;

  const displayScroll = (input) => {
    input === "enter"
      ? setState({ drag: false, scroll: true })
      : setState({ ...state, scroll: false });
  };

  const displayDrag = (input) => {
    input === "enter"
      ? setState({ scroll: false, drag: true })
      : setState({ ...state, drag: false });
  };

  const datesInputted = (component) =>
    start.startDate !== "" && end.endDate !== "" ? component : null;

  const { scroll, drag } = state;

  return (
    <div className={`schedulerWrapper ${css.schedulerWrapper}`}>
      {datesInputted(<SchedulerScroll scroll={scroll}></SchedulerScroll>)}
      {datesInputted(<SchedulerDrag drag={drag}></SchedulerDrag>)}
      <DateParts displayDrag={displayDrag} location="schedulePage" />
      <SchedulerGrid displayScroll={displayScroll}></SchedulerGrid>
      <MobileSelector></MobileSelector>
      <SavedDates location="schedulerPage"></SavedDates>
    </div>
  );
};

export default SchedulerPage;
