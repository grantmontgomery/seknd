import React, { useState } from "react";
import { SchedulerGridSquare } from "../Scheduler-Grid-Square";
import { useSelector } from "react-redux";
import { DirectionsPiece, HoursHeader } from "./Parts";
import { setGrid, timeLogic } from "./Logic";
import css from "./SchedulerGrid.css";
import { useEffect } from "react";

const SchedulerGrid = () => {
  const grid = useSelector(state => state.dateGridReducer);
  const hourLogic = useSelector(state => state.hoursReducer);
  const { start, end } = grid;

  const [style, setStyle] = useState({
    width: "",
    gridTemplateColumns: "",
    gridTemplateAreas: ""
  });

  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const gridObject = setGrid(start.startTime, end.endTime);
    const styling = Object.keys(gridObject)
      .filter(key => key !== "squares")
      .reduce((obj, key) => {
        obj[key] = gridObject[key];
        return obj;
      }, {});
    setStyle({ ...styling });
    setSquares([...gridObject.squares]);
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
              key={`${square}${Math.random()}`}
              index={index}
            ></SchedulerGridSquare>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={`schedulerGridWrapper ${css.schedulerGridWrapper}`}>
      {wasSearched()}
    </div>
  );
};

export default SchedulerGrid;
