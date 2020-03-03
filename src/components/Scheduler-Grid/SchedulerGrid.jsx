import React from "react";
import { SchedulerGridSquare } from "../Scheduler-Grid-Square";
import { useSelector } from "react-redux";
import css from "./SchedulerGrid.css";

const SchedulerGrid = props => {
  const repeatString = (string, number) => {
    let newString = "";
    while (number > 0) {
      newString += string;
      number--;
    }
  };

  const gridSliderStyle = () => {
    const { hourDifference } = props;
    const width = (hourDifference + 1) * 200;
    const amountOfColumns = width / 100;
    const gridColumnSize = " 100px";
    const squareStr = " square";
    const headerStr = " header";
    const rowStr = ` "${repeatString(squareStr, amountOfColumns)}"`;
    const firstRow = `"${repeatString(headerStr, amountOfColumns)}"`;
    return {
      width: `${width}px`,
      gridTemplateColumns: ` ${repeatString(gridColumnSize, amountOfColumns)}`,
      gridTemplateAreas: `${firstRow}${repeatString(rowStr, 7)}`
    };
  };

  const renderHoursSections = () => {
    let { startHour, startDay, endDay, endHour } = props;
    if (startDay !== endDay) {
      const hours = [];
      while (startHour < 24) {
        if (startHour > 12) {
          hours.push(`${startHour - 12}:00 p.m`);
          startHour++;
        } else if (startHour === 0) {
          hours.push(`12:00 a.m`);
          startHour++;
        } else if (startHour === 12) {
          hours.push(`12:00 p.m`);
        } else {
          hours.push(`${startHour}:00 a.m`);
          startHour++;
        }
      }
      let endHourCount = 0;
      while (endHourCount <= endHour) {
        if (endHourCount > 12) {
          hours.push(`${endHourCount - 12}:00 p.m`);
          endHourCount++;
        } else if (endHourCount === 0) {
          hours.push(`12:00 a.m`);
          endHourCount++;
        } else if (endHourCount === 12) {
          hours.push(`12:00 p.m`);
          endHourCount++;
        } else {
          hours.push(`${endHourCount}:00 a.m`);
          endHourCount++;
        }
      }

      return hours.map(hour => {
        return (
          <div className="hours-wrapper">
            <p>{hour}</p>
          </div>
        );
      });
    } else {
      const hours = [];
      while (startHour <= endHour) {
        if (startHour > 12) {
          hours.push(`${startHour - 12}:00 p.m`);
          startHour++;
        } else if (startHour === 0) {
          hours.push(`12:00 a.m`);
          startHour++;
        } else if (startHour === 12) {
          hours.push(`12:00 p.m`);
        } else {
          hours.push(`${startHour}:00 a.m`);
          startHour++;
        }
      }
      return hours.map(hour => {
        return (
          <div className="hours-wrapper" style={{ width: "200px" }}>
            <p>{hour}</p>
          </div>
        );
      });
    }
  };

  return (
    <div className={`schedulerGridWrapper ${css.schedulerGridWrapper}`}>
      <div className={`gridSlider ${css.gridSlider}`}>
        <div className={`gridDateHeader ${css.gridDateHeader}`}></div>
        {/* {props.squares.map(square => (
          <SchedulerGridSquare key={square}></SchedulerGridSquare>
        ))} */}
        <SchedulerGridSquare></SchedulerGridSquare>
      </div>
    </div>
  );
};

export default SchedulerGrid;
