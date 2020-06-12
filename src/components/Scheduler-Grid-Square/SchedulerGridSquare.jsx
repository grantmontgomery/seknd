import React from "react";
import css from "./SchedulerGridSquare.css";
import { DragPiece } from "../Date-Parts-Piece/Parts/DragPiece";
import { MobileDragPiece } from "../Date-Parts-Piece/Parts/MobileDragPiece";
import { useEffect } from "react";
import { useCallback } from "react";

const SchedulerGridSquare = ({ parts }) => {
  return (
    <React.Fragment>
      <div className={`squareWrapper ${css.squareWrapper}`}>
        {parts.map((squarePart) => (
          <DragPiece
            key={squarePart.id}
            squarePart={squarePart}
            partLocation={squarePart.partLocation}
            squareWrapperWidth={squarePart.desktopDrag.wrapperWidth}
            squareInnerWidth={squarePart.desktopDrag.innerWidth}
          ></DragPiece>
        ))}
      </div>
      <div className={`mobileSquare ${css.mobileSquare}`}>
        {parts.map((squarePart) => (
          <MobileDragPiece
            key={squarePart.id}
            squarePart={squarePart}
            partLocation={squarePart.partLocation}
            squareWrapperWidth={squarePart.mobileDrag.wrapperWidth}
            squareInnerWidth={squarePart.mobileDrag.innerWidth}
          ></MobileDragPiece>
        ))}
      </div>
    </React.Fragment>
  );
};

export default React.memo(SchedulerGridSquare);
