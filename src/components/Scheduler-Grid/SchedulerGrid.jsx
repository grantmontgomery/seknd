import React, { useState } from "react";
import { SchedulerGridSquare } from "../Scheduler-Grid-Square";
import { useSelector, useDispatch } from "react-redux";
import { DirectionsPiece, HoursHeader } from "./Parts";
import { setGrid, timeLogic } from "./Logic";
import { actions } from "../../redux";
import css from "./SchedulerGrid.css";
import { useEffect } from "react";

const SchedulerGrid = () => {
  const grid = useSelector(state => state.dateGridReducer);
  const squares = useSelector(state => state.squaresReducer);
  const { start, end } = grid;
  const dispatch = useDispatch();

  const [style, setStyle] = useState({
    width: "",
    gridTemplateColumns: "",
    gridTemplateAreas: ""
  });

  // const [displayGrid, setDisplay] = useState(false);

  const { squaresActions } = actions;

  useEffect(() => {
    const gridObject = setGrid(start.startTime, end.endTime);
    const styling = Object.keys(gridObject)
      .filter(key => key !== "squares")
      .reduce((obj, key) => {
        obj[key] = gridObject[key];
        return obj;
      }, {});
    setStyle({ ...styling });
    dispatch(
      squaresActions({
        type: "ADD_SQUARES_LOGIC",
        payload: gridObject.squares
      })
    );
    // setDisplay(true);
  }, []);

  const wasSearched = () => {
    if (start.startDate === "" && end.endDate === "") {
      return <DirectionsPiece></DirectionsPiece>;
    } else {
      return (
        <div className={`gridSlider ${css.gridSlider}`} style={{ ...style }}>
          <HoursHeader></HoursHeader>
          {squares.map((square, index) => (
            <SchedulerGridSquare
              key={`${square.index}.${Math.random()}`}
              index={index}
            ></SchedulerGridSquare>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={`schedulerGridWrapper ${css.schedulerGridWrapper}`}>
      {wasSearched(grid)}
    </div>
  );
};

export default SchedulerGrid;
