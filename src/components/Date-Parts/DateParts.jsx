import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DatePartsPiece } from "../Date-Parts-Piece";
import { ExitButton, NewInput, ColorSelector } from "./Parts";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import css from "./DateParts.css";

const DateParts = () => {
  const [state, setState] = useState({ shape: "partsCircle" });

  const { shape } = state;

  const dateParts = useSelector(state => state.datePartsReducer);

  const changeShape = event => {
    event.preventDefault();
    const { target } = event;
    const button = target.className;
    console.log(button);
    if (shape === "partsCircle") {
      setState({ shape: "partsExtended" });
    } else if (
      shape === "partsExtended" &&
      button.includes("partsExtendedExit") === true
    ) {
      setState({ shape: "partsCircle" });
    }
  };

  const applyTransitions = () => {
    return dateParts.map(part => (
      <CSSTransition key={part.id} timeout={400} classNames="slide-transition">
        <DatePartsPiece key={part.id} part={part}></DatePartsPiece>
      </CSSTransition>
    ));
  };

  const changeInternals = () => {
    if (shape === "partsExtended") {
      return (
        <React.Fragment>
          <ExitButton></ExitButton>
          <div className={`partsHeader ${css.partsHeader}`}>Date Parts</div>
          <NewInput></NewInput>
          <div className={`piecesWrapper ${css.piecesWrapper}`}>
            <TransitionGroup>{applyTransitions()}</TransitionGroup>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <div
      className={`datePartsWrapper ${css.datePartsWrapper} ${shape} ${
        css[`${shape}`]
      }`}
      onClick={changeShape}
    >
      {changeInternals()}
    </div>
  );
};

export default DateParts;
