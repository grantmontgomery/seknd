import React, { useState } from "react";
import { SchedulerGridSquare } from "../Scheduler-Grid-Square";
import { useSelector } from "react-redux";
import css from "./SchedulerGrid.css";
import { useEffect } from "react";

const SchedulerGrid = ({ timeDifference }) => {
  const [style, setStyle] = useState({
    width: "",
    gridTemplateColumns: "",
    gridTemplateAreas: ""
  });

  const [squares, setSquares] = useState([]);

  const repeatString = (string, number) => {
    let newString = "";
    while (number > 0) {
      newString += string;
      number--;
    }
    return newString;
  };

  useEffect(() => {
    setGridStyle(timeDifference);
  }, []);

  const setGridStyle = () => {
    let width = (timeDifference + 1) * 200;
    let gridColumnSize = " 100px";
    let amountOfColumns = width / 100;
    let rowString = ` "${repeatString(" square", amountOfColumns)}`;
    let firstRow = `${repeatString(" header", amountOfColumns)}`;
    let gridTemplateAreas = `${(firstRow, repeatString(rowString, 5))}`;
    let gridTemplateColumns = repeatString(gridColumnSize, amountOfColumns);
    setStyle({ gridTemplateColumns, gridTemplateAreas, width: `${width}px` });
  };

  return (
    <div className={`schedulerGridWrapper ${css.schedulerGridWrapper}`}>
      <div className={`gridSlider ${css.gridSlider}`} {...style}>
        <div className={`gridDateHeader ${css.gridDateHeader}`}></div>
        <SchedulerGridSquare></SchedulerGridSquare>
      </div>
    </div>
  );
};

export default SchedulerGrid;
