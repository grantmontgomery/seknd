import React, { useState } from "react";
import DatePicker from "react-datepicker";
import css from "./WhenSelector.css";
import { useCallback } from "react";

const WhenSelector = ({ handleQuery, style }) => {
  let [startDate, setStart] = useState("");
  let [endDate, setEnd] = useState("");

  const handleStart = useCallback(
    (date, startDate) => {
      const unixStartDate = Math.round(new Date(date).getTime() / 1000);

      startDate = new Date(date);
      let months =
        startDate.getMonth() === 0
          ? `0${1}`
          : startDate.getMonth() + 1 < 10
          ? "0" + (startDate.getMonth() + 1)
          : startDate.getMonth() + 1;
      let days =
        startDate.getDate() === 0
          ? startDate.getDate() + "0"
          : startDate.getDate() < 10
          ? "0" + startDate.getDate()
          : startDate.getDate();
      let hours =
        startDate.getHours() === 0
          ? startDate.getHours() + "0"
          : startDate.getHours() < 10
          ? "0" + startDate.getHours()
          : startDate.getHours();
      let minutes =
        startDate.getMinutes() === 0
          ? startDate.getMinutes() + "0"
          : startDate.getMinutes() < 10
          ? "0" + startDate.getMinutes()
          : startDate.getMinutes();
      let seconds =
        startDate.getSeconds() === 0
          ? startDate.getSeconds() + "0"
          : startDate.getSeconds() < 10
          ? "0" + startDate.getSeconds()
          : startDate.getSeconds();
      const startFormatted = `${startDate.getFullYear()}-${months}-${days}T${hours}:${minutes}:${seconds}Z`;
      handleQuery({ startDate });
      handleQuery({ startFormatted });
      handleQuery({ unixStartDate });

      return startDate;
    },
    [startDate]
  );

  const handleEnd = useCallback(
    (date, endDate) => {
      // console.log(date);
      const unixEndDate = Math.round(new Date(date).getTime() / 1000);
      // console.log(unixEndDate);
      // console.log(date - new Date(date).getTime());

      endDate = new Date(date);
      let months =
        endDate.getMonth() === 0
          ? `0${1}`
          : endDate.getMonth() + 1 < 10
          ? "0" + (endDate.getMonth() + 1)
          : endDate.getMonth() + 1;
      let days =
        endDate.getDate() === 0
          ? endDate.getDate() + "0"
          : endDate.getDate() < 10
          ? "0" + endDate.getDate()
          : endDate.getDate();
      let hours =
        endDate.getHours() === 0
          ? endDate.getHours() + "0"
          : endDate.getHours() < 10
          ? "0" + endDate.getHours()
          : endDate.getHours();
      let minutes =
        endDate.getMinutes() === 0
          ? endDate.getMinutes() + "0"
          : endDate.getMinutes() < 10
          ? "0" + endDate.getMinutes()
          : endDate.getMinutes();
      let seconds =
        endDate.getSeconds() === 0
          ? endDate.getSeconds() + "0"
          : endDate.getSeconds() < 10
          ? "0" + endDate.getSeconds()
          : endDate.getSeconds();
      const endFormatted = `${endDate.getFullYear()}-${months}-${days}T${hours}:${minutes}:${seconds}Z`;
      handleQuery({ endDate });
      handleQuery({ endFormatted });
      handleQuery({ unixEndDate });

      return endDate;
    },
    [endDate]
  );

  return (
    <div
      className={`whenSelectWrapper ${css.whenSelectWrapper} ${style} ${
        css[`${style}`]
      }`}
    >
      <span className={`when ${css.when}`}>When are you meeting?</span>
      <div className={`timeWrapper ${css.timeWrapper}`}>
        <DatePicker
          name="date"
          autoComplete="off"
          selected={startDate}
          onChange={date => setStart(handleStart(date, startDate))}
          showTimeSelect
          minDate={new Date()}
          calendarClassName={`datePickerInternal ${css.datePickerInternal}`}
          className={`datePicker ${css.datePicker} fromPicker ${css.fromPicker}`}
          placeholderText="Click to select when you're meeting."
          dateFormat="Pp"
        ></DatePicker>
        <DatePicker
          name="date"
          autoComplete="off"
          selected={endDate}
          minDate={new Date()}
          className={`datePicker ${css.datePicker} toPicker ${css.toPicker}`}
          placeholderText="Click to select a rough end time."
          onChange={date => setEnd(handleEnd(date, endDate))}
          calendarClassName={`datePickerInternal ${css.datePickerInternal}`}
          showTimeSelect
          dateFormat="Pp"
        ></DatePicker>
      </div>
    </div>
  );
};

export default React.memo(WhenSelector);
