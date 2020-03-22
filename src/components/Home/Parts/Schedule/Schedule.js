import React from "react";
import SchedulerGridPic from "../../../../assets/SchedulerGridPic.png";
import DraggingPiece from "../../../../assets/piecedragging.svg";
import css from "./Schedule.css";

const Schedule = () => {
  const hoverOff = () => {};

  const hoverOn = () => {};
  return (
    <div className={`scheduleWrapper ${css.scheduleWrapper}`}>
      <div className={`schedulerPicWrapper ${css.schedulerPicWrapper}`}>
        <img src={`${SchedulerGridPic}`} alt="" />
      </div>
      <div className={`piecePicWrapper ${css.piecePicWrapper}`}>
        <img src={`${DraggingPiece}`} alt="" />
      </div>
    </div>
  );
};

export default Schedule;
