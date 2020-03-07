import React, { useState } from "react";
import { SchedulerGridSquare } from "../Scheduler-Grid-Square";
import { useSelector } from "react-redux";
import { setGrid } from "./Logic";
import css from "./SchedulerGrid.css";
import { useEffect } from "react";

const SchedulerGrid = () => {
  const grid = useSelector(state => state.dateGridReducer);
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

  console.log(style);
  return (
    <div className={`schedulerGridWrapper ${css.schedulerGridWrapper}`}>
      <div className={`gridSlider ${css.gridSlider}`} style={{ ...style }}>
        <div className={`gridDateHeader ${css.gridDateHeader}`}></div>
        {squares.map(square => (
          <SchedulerGridSquare
            key={`${square}${Math.random()}`}
          ></SchedulerGridSquare>
        ))}
      </div>
    </div>
  );
};

export default SchedulerGrid;
