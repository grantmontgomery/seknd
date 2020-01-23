import React from "react";
import css from "./Scheduler.css";

import { SchedulerGrid } from "../Scheduler-Grid";
import { SchedulerList } from "../Scheduler-List";

const Scheduler = () => {
  return (
    <div className={`schedulerWrapper ${css.schedulerWrapper}`}>
      <SchedulerList></SchedulerList>
      <SchedulerGrid></SchedulerGrid>
    </div>
  );
};

export default Scheduler;
