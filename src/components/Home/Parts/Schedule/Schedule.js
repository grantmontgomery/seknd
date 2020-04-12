import React, { forwardRef } from "react";
import SchedulerGridPic from "../../../../assets/SchedulerGridPicCopy.png";
import { useSelector } from "react-redux";
import DraggingPiece from "../../../../assets/piecedragging.svg";
import { Step } from "../Step";
import css from "./Schedule.css";

const Schedule = ({ render }) => {
  const { scheduleText, scheduleParts } = useSelector(
    state => state.homeScrollStylesReducer
  );
  const { grid, piece } = scheduleParts;
  return render === true ? (
    <div className={`scheduleWrapper ${css.scheduleWrapper}`}>
      <div
        className={`scheduleTextWrapper ${css.scheduleTextWrapper}`}
        style={{ ...scheduleText }}
      >
        <div className={`scheduleHeaderWrapper ${css.scheduleHeaderWrapper}`}>
          Schedule...
        </div>
        <div
          className={`scheduleDescriptionWrapper ${css.scheduleDescriptionWrapper}`}
        >
          Use the parts you selected to plan out the perfect day or night using
          our drag and drop system.
        </div>
      </div>

      <div
        className={`gridPicWrapper ${css.gridPicWrapper}`}
        style={{ ...grid }}
      >
        <img src={SchedulerGridPic} alt="" />
      </div>

      <div
        className={`piecePicWrapper ${css.piecePicWrapper}`}
        style={{ ...piece }}
      >
        <img src={`${DraggingPiece}`} alt="" />
      </div>
    </div>
  ) : null;
};

export default forwardRef(Schedule);
