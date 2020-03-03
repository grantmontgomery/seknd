import React from "react";
import css from "./SchedulerGrid.css";

const SchedulerGrid = () => {
  const repeatString = (string, number) => {
    let newString = "";
    while (number > 0) {
      newString += string;
      number--;
    }
  };

  const gridSliderStyle = () => {
    const { hourDifference } = this.props;
    const width = (hourDifference + 1) * 200;
    const amountOfColumns = width / 100;
    const gridColumnSize = " 100px";
    const squareStr = " square";
    const headerStr = " header";
    const rowStr = ` "${this.repeatString(squareStr, amountOfColumns)}"`;
    const firstRow = `"${this.repeatString(headerStr, amountOfColumns)}"`;
    return {
      width: `${width}px`,
      gridTemplateColumns: ` ${this.repeatString(
        gridColumnSize,
        amountOfColumns
      )}`,
      gridTemplateAreas: `${firstRow}${this.repeatString(rowStr, 7)}`
    };
  };

  const renderHoursSections = () => {
    let { startHour, startDay, endDay, endHour } = this.props;
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
      </div>
    </div>
  );
};

export default SchedulerGrid;
