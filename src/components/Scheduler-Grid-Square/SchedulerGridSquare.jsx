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
          <React.Fragment>
            <DragPiece
              key={`deskTop${squarePart.id}`}
              squarePart={squarePart}
              partLocation={squarePart.partLocation}
              squareWrapperWidth={squarePart.desktopDrag.wrapperWidth}
              squareInnerWidth={squarePart.desktopDrag.innerWidth}
            ></DragPiece>
            <MobileDragPiece
              key={`mobile${squarePart.id}`}
              squarePart={squarePart}
              partLocation={squarePart.partLocation}
              squareWrapperWidth={squarePart.mobileDrag.wrapperWidth}
              squareInnerWidth={squarePart.mobileDrag.innerWidth}
            ></MobileDragPiece>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default React.memo(SchedulerGridSquare);
