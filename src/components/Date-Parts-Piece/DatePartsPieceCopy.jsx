import React from "react";
import { Logic } from "./Logic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./DatePartsPiece.css";
import { useEffect, useState } from "react";
import { DragPiece, NormalPiece } from "./Parts";
import { useCallback } from "react";

const DatePartsPiece = ({ part, page }) => {
  return page === "search" ? (
    <React.Fragment>
      <NormalPiece part={part}></NormalPiece>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <DragPiece part={part}></DragPiece>
    </React.Fragment>
  );
};

export default DatePartsPiece;
