import React, { forwardRef } from "react";
import SchedulerGridPic from "../../../../assets/SchedulerGridPic.png";
import DraggingPiece from "../../../../assets/piecedragging.svg";
import { Step } from "../Step";
import css from "./Schedule.css";

const Schedule = (props, ref) => {
  const hoverOff = () => {};

  const hoverOn = () => {};
  return (
    <div className={`scheduleWrapper ${css.scheduleWrapper}`} ref={ref}>
      <div className={`scheduleTextWrapper ${css.scheduleTextWrapper}`}>
        Plan
      </div>
      <div className={`animationWrapper ${css.animationWrapper}`}>
        <div className={`schedulerPicWrapper ${css.schedulerPicWrapper}`}>
          <img src={`${SchedulerGridPic}`} alt="" />
        </div>
        <div className={`piecePicWrapper ${css.piecePicWrapper}`}>
          <img src={`${DraggingPiece}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Schedule);
