import React, { forwardRef } from "react";
import SchedulerGridPic from "../../../../assets/SchedulerGridPic.png";
import DraggingPiece from "../../../../assets/piecedragging.svg";
import { Step } from "../Step";
import css from "./Schedule.css";

const Schedule = ({ render }) => {
  return render === true ? (
    <div className={`scheduleWrapper ${css.scheduleWrapper}`}>
      <div className={`scheduleTextWrapper ${css.scheduleTextWrapper}`}>
        Plan
      </div>
      <div className={`schedulerPicWrapper ${css.schedulerPicWrapper}`}>
        <img src={`${SchedulerGridPic}`} alt="" />
      </div>
      <div className={`piecePicWrapper ${css.piecePicWrapper}`}>
        <img src={`${DraggingPiece}`} alt="" />
      </div>
    </div>
  ) : null;
};

export default forwardRef(Schedule);
