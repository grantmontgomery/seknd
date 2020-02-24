import React from "react";
import css from "./Scheduler.css";

import { SchedulerGrid } from "../Scheduler-Grid";
import { SchedulerList } from "../Scheduler-List";
import {DateParts} from "../Date-Parts";

const Scheduler = () => {
  return (
    <div className={`schedulerWrapper ${css.schedulerWrapper}`}>
      <DateParts page="scheduler"/>
      <SchedulerGrid></SchedulerGrid>
    </div>
  );
};

export default Scheduler;
