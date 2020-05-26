import React from "react";
import { Logic } from "./Logic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./DatePartsPiece.css";
import { useEffect, useState } from "react";
import { DragPiece, NormalPiece, MobileDragPiece } from "./Parts";
import { useCallback } from "react";

const DatePartsPiece = ({ part, location, index }) => {
  switch (location) {
    case "searchPage":
      return <NormalPiece part={part} index={index}></NormalPiece>;
    case "schedulePage":
      return (
        <DragPiece
          part={part}
          index={index}
          partLocation={part.partLocation}
          onGrid={part.onGrid ? "onGrid" : ""}
        ></DragPiece>
      );
    case "navLinks":
      return <NormalPiece part={part} index={index}></NormalPiece>;
    // case "mobileSelector":
    //   return (
    //     <MobileDragPiece
    //       part={part}
    //       index={index}
    //       partLocation={part.partLocation}
    //       onGrid={part.onGrid ? "onGrid" : ""}
    //     ></MobileDragPiece>
    //   );
    default:
      return <NormalPiece part={part} index={index}></NormalPiece>;
  }
};

export default DatePartsPiece;
