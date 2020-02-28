import React from "react";
import { Logic } from "./Logic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./DatePartsPiece.css";
import { ExtendedParts } from "./Parts";
import { useEffect, useState } from "react";
import { DragPiece, NormalPiece } from "./Parts";
import { useCallback } from "react";

const DatePartsPiece = ({ part, page }) => {
  useEffect(() => {}, [page]);

  return page === "search" ? (
    <NormalPiece part={part}></NormalPiece>
  ) : (
    <DragPiece part={part}></DragPiece>
  );
};

export default DatePartsPiece;
