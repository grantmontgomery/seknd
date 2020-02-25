import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DatePartsPiece } from "../Date-Parts-Piece";
import { NewInput, ColorSelector } from "./Parts";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import css from "./DateParts.css";

const DateParts = ({ page }) => {
  const dateParts = useSelector(state => state.datePartsReducer);

  let [pageType, setPage] = useState("");

  const applyTransitions = () => {
    return dateParts.map(part => (
      <CSSTransition key={part.id} timeout={400} classNames="slide-transition">
        <DatePartsPiece key={part.id} page={page} part={part}></DatePartsPiece>
      </CSSTransition>
    ));
  };

  useEffect(() => {
    page === "scheduler" ? setPage("schedulerPage") : setPage("searchPage");
  }, [page]);

  return (
    <div
      className={`datePartsWrapper ${css.datePartsWrapper} ${pageType} ${
        css[`${pageType}`]
      } 
     `}
    >
      <div className={`partsHeader ${css.partsHeader}`}>
        <div className={`partsTitle ${css.partsTitle}`}>DATE PARTS</div>
        <NewInput></NewInput>
        <ColorSelector></ColorSelector>
      </div>

      <div className={`piecesWrapper ${css.piecesWrapper}`}>
        <TransitionGroup>{applyTransitions()}</TransitionGroup>
      </div>
    </div>
  );
};

export default DateParts;
