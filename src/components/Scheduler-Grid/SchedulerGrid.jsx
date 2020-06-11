import React, { useState } from "react";
import { SchedulerGridSquare } from "../Scheduler-Grid-Square";
import { useSelector, useDispatch } from "react-redux";
import { DirectionsPiece, HoursHeader } from "./Parts";
import { actions } from "../../redux";
import css from "./SchedulerGrid.css";
import { useEffect } from "react";

const SchedulerGrid = ({ displayScroll }) => {
  const grid = useSelector((state) => state.dateGridReducer);
  const squares = useSelector((state) => state.squaresReducer);
  const { desktop, mobile } = useSelector(
    (state) => state.gridDimensionsReducer
  );

  const { start, end } = grid;
  const dispatch = useDispatch();

  useEffect(() => {
    const piecesWrapper = document.getElementsByClassName(`piecesWrapper`)[0]
      .childNodes[0];
  }, []);

  const handleTouchStart = (event) => {
    console.log(event.touches);
  };

  const wasSearched = () => {
    if (start.startDate === "" && end.endDate === "") {
      return <DirectionsPiece></DirectionsPiece>;
    } else {
      return (
        <React.Fragment>
          <div
            className={`gridSliderDesktop ${css.gridSliderDesktop}`}
            style={{ ...desktop }}
          >
            <HoursHeader></HoursHeader>
            {squares.map((square, index) => (
              <SchedulerGridSquare
                key={`${square.index}.${Math.random()}`}
                index={index}
                parts={square.parts}
              ></SchedulerGridSquare>
            ))}
          </div>
          <div
            className={`gridSliderMobile ${css.gridSliderMobile}`}
            style={{ ...mobile }}
          >
            <HoursHeader></HoursHeader>
            {squares.map((square, index) => (
              <SchedulerGridSquare
                key={`${square.index}.${Math.random()}`}
                index={index}
                parts={square.parts}
              ></SchedulerGridSquare>
            ))}
          </div>
        </React.Fragment>
        // <div className={`gridSlider ${css.gridSlider}`} style={{ ...style }}>
        //   <HoursHeader></HoursHeader>
        //   {squares.map((square, index) => (
        //     <SchedulerGridSquare
        //       key={`${square.index}.${Math.random()}`}
        //       index={index}
        //       parts={square.parts}
        //     ></SchedulerGridSquare>
        //   ))}
        // </div>
      );
    }
  };

  return (
    <div
      className={`schedulerGridWrapper ${css.schedulerGridWrapper}`}
      onMouseEnter={() => displayScroll("enter")}
      onMouseLeave={() => displayScroll("exit")}
      onTouchStart={handleTouchStart}
    >
      {wasSearched(grid)}
    </div>
  );
};

export default SchedulerGrid;
