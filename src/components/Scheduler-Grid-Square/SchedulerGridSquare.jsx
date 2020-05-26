import React from "react";
import css from "./SchedulerGridSquare.css";
import { DragPiece } from "../Date-Parts-Piece/Parts/DragPiece";
import { MobileDragPiece } from "../Date-Parts-Piece/Parts/MobileDragPiece";
import { useEffect } from "react";
import { useCallback } from "react";

const SchedulerGridSquare = ({ children, index, parts }) => {
  return (
    <div className={`squareWrapper ${css.squareWrapper}`}>
      {parts.map((squarePart) => (
        <React.Fragment>
          <DragPiece
            key={squarePart.id}
            squarePart={squarePart}
            partLocation={squarePart.partLocation}
            squareWrapperWidth={squarePart.wrapperWidth}
            squareInnerWidth={squarePart.innerWidth}
          ></DragPiece>
          {/* <MobileDragPiece
            key={squarePart.id}
            squarePart={squarePart}
            partLocation={squarePart.partLocation}
            squareWrapperWidth={squarePart.wrapperWidth}
            squareInnerWidth={squarePart.innerWidth}
          ></MobileDragPiece> */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default React.memo(SchedulerGridSquare);
