import React from "react";
import css from "../SearchResultCard.css";

const parseTicketMasterTime = item => {
  const { dates, url } = item;
  const { start } = dates;
  const { localDate, localTime } = start;

  let startString = localDate + "T" + localTime;

  if (startString !== "T") {
    let startDate = new Date(startString);
    let startTimeString = startDate.toLocaleTimeString();
    let startDateString = startDate.toLocaleDateString();
    let startTimeStringLength = startTimeString.length;
    let startTimeFormatted = startTimeString.substring(
      0,
      startTimeStringLength - 6
    );
    let startAmPm = startTimeString.substring(startTimeStringLength - 3);

    const parsedStartTime = ` ${startDateString} ${startTimeFormatted}${startAmPm}`;

    item.parsedStartTime = parsedStartTime;

    return (
      <React.Fragment>
        <li className={`itemDetails ${css.itemDetails}`}>
          <span>From:</span>
          <span className={`eventTime ${css.eventTime}`}>
            {parsedStartTime}
          </span>
        </li>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <li className={`itemDetails ${css.itemDetails}`}>
          <a
            href={url}
            target="_blank"
            className={`eventTime ${css.eventTime}`}
          >
            Click here to check times
          </a>
        </li>
      </React.Fragment>
    );
  }
};

export default parseTicketMasterTime;
