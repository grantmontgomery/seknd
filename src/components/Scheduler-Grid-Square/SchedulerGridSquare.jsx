import React from "react";
import css from "./SchedulerGridSquare.css";
import { DragPiece } from "../Date-Parts-Piece/Parts/DragPiece";
import { useEffect } from "react";
import { useCallback } from "react";

const SchedulerGridSquare = ({ children, index, parts }) => {
  return (
    <div className={`squareWrapper ${css.squareWrapper}`}>
      {parts.map(part => (
        <DragPiece
          key={part.id}
          part={part}
          location={part.partLocation}
        ></DragPiece>
      ))}
    </div>
  );
};

export default React.memo(SchedulerGridSquare);
