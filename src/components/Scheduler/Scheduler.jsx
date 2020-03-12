import React from "react";
import css from "./Scheduler.css";

import { SchedulerGrid } from "../Scheduler-Grid";
// import { SchedulerList } from "../Scheduler-List";
import { DateParts } from "../Date-Parts";
import { useEffect } from "react";

const Scheduler = () => {
  // useEffect(() => {
  //   const piecesWrapper = document.getElementsByClassName("piecesWrapper")[0]
  //     .childNodes[0];
  //   console.log(piecesWrapper.childNodes);
  //   return console.log(piecesWrapper.childNodes);
  // }, []);
  return (
    <div className={`schedulerWrapper ${css.schedulerWrapper}`}>
      <DateParts page="scheduler" />
      <SchedulerGrid></SchedulerGrid>
    </div>
  );
};

export default Scheduler;
