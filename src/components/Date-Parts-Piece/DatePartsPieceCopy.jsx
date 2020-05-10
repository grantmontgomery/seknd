import React from "react";
import { Logic } from "./Logic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./DatePartsPiece.css";
import { useEffect, useState } from "react";
import { DragPiece, NormalPiece } from "./Parts";
import { useCallback } from "react";

const DatePartsPiece = ({ part, location, index }) => {
  return location === "search" ? (
    <React.Fragment>
      <NormalPiece part={part} index={index}></NormalPiece>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <DragPiece
        part={part}
        index={index}
        partLocation={part.partLocation}
        onGrid={part.onGrid ? "onGrid" : ""}
      ></DragPiece>
    </React.Fragment>
  );
};

export default DatePartsPiece;
