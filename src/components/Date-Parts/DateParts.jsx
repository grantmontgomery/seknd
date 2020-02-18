import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DatePartsPiece } from "../Date-Parts-Piece";
import css from "./DateParts.css";

const DateParts = () => {
  const [state, setState] = useState({ shape: "circle" });
  const { shape } = state;
  const dateParts = useSelector(state => state.datePartsReducer);

  const changeShape = event => {
    event.preventDefault();
    const { target } = event;
    const button = target.className;
    if (shape === "circle") {
      setState({ shape: "extended" });
    } else if (
      shape === "extended" &&
      button.includes("partsExtendedExit") === true
    ) {
      setState({ shape: "circle" });
    }
  };

  const setShape = () => {
    if (shape === "circle") {
      return `partsCircle ${css.partsCircle}`;
    } else {
      return `partsExtended ${css.partsExtended}`;
    }
  };

  const exitButton = () => {
    if (shape === "extended") {
      return (
        <React.Fragment>
          <button className={`partsExtendedExit ${css.partsExtendedExit}`}>
            X
          </button>
        </React.Fragment>
      );
    }
  };

  const piecesWrapper = () => {
    if (shape === "extended") {
      return (
        <React.Fragment>
          <div className={`piecesWrapper ${css.piecesWrapper}`}>
            {dateParts.map(part => (
              <DatePartsPiece key={part.id} part={part}></DatePartsPiece>
            ))}
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <div
      className={`datePartsWrapper ${css.datePartsWrapper} ${setShape()}`}
      onClick={changeShape}
    >
      {piecesWrapper()}
      {exitButton()}
    </div>
  );
};

export default DateParts;
