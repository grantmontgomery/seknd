import React, { forwardRef } from "react";
import SchedulerGridPic from "../../../../assets/SchedulerGridPicCopy.png";
import { useSelector } from "react-redux";
import DraggingPiece from "../../../../assets/piecedragging.svg";
import { Step } from "../Step";
import css from "./Schedule.css";

const Schedule = ({ render }) => {
  const { scheduleText, scheduleParts } = useSelector(
    (state) => state.homeScrollStylesReducer
  );
  const { grid, piece } = scheduleParts;
  return render === true ? (
    <div className={`scheduleWrapper ${css.scheduleWrapper}`}>
      <div className={`scheduleTextWrapper ${css.scheduleTextWrapper}`}>
        <div
          className={`scheduleHeaderWrapper ${css.scheduleHeaderWrapper}`}
          style={{}}
        >
          Schedule...
        </div>
        <div
          className={`scheduleDescriptionWrapper ${css.scheduleDescriptionWrapper}`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus veniam placeat, sit rem possimus odit? Tempora, eos
          quod mollitia magnam recusandae quidem architecto quisquam atque
          deleniti! Quibusdam sed aut repellendus!
        </div>
      </div>

      <div className={`gridPicWrapper ${css.gridPicWrapper}`}>
        <img src={SchedulerGridPic} alt="" />
      </div>

      <div className={`piecePicWrapper ${css.piecePicWrapper}`}>
        <img src={`${DraggingPiece}`} alt="" />
      </div>
    </div>
  ) : null;
};

export default forwardRef(Schedule);
