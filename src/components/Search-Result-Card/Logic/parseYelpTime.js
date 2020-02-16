import React from "react";
import css from "../SearchResultCard.css";

const parseYelpTime = (start, end, url) => {
  if (start !== null && end !== null) {
    let startFormatted = start.substring(0, 19);
    let startDate = new Date(startFormatted);
    let startTimeString = startDate.toLocaleTimeString();
    let startDateString = startDate.toLocaleDateString();
    let startTimeStringLength = startTimeString.length;
    let startTimeFormatted = startTimeString.substring(
      0,
      startTimeStringLength - 6
    );
    let startAmPm = startTimeString.substring(startTimeStringLength - 3);

    let endFormatted = end.substring(0, 19);
    let endDate = new Date(endFormatted);
    let endDateString = endDate.toLocaleDateString();
    let endTimeString = endDate.toLocaleTimeString();
    let endTimeStringLength = endTimeString.length;
    let endTimeFormatted = endTimeString.substring(0, endTimeStringLength - 6);
    let endAmPm = endTimeString.substring(endTimeStringLength - 3);

    let differenceBetween = endDate - startDate;

    if (differenceBetween > 86400000) {
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
    } else {
      return (
        <React.Fragment>
          <li className={`itemDetails ${css.itemDetails}`}>
            <span>From:</span>
            <span
              className={`eventTime ${css.eventTime}`}
            >{` ${startDateString} ${startTimeFormatted}${startAmPm}`}</span>
          </li>
          <li className={`itemDetails ${css.itemDetails}`}>
            <span>To:</span>
            <span
              className={`eventTime ${css.eventTime}`}
            >{` ${endDateString} ${endTimeFormatted}${endAmPm}`}</span>
          </li>
        </React.Fragment>
      );
    }
  } else if (start !== null && end === null) {
    let startFormatted = start.substring(0, 19);
    let startDate = new Date(startFormatted);
    let startTimeString = startDate.toLocaleTimeString();
    let startDateString = startDate.toLocaleDateString();
    let startTimeStringLength = startTimeString.length;
    let startTimeFormatted = startTimeString.substring(
      0,
      startTimeStringLength - 6
    );
    let startAmPm = startTimeString.substring(startTimeStringLength - 3);

    return (
      <React.Fragment>
        <li className={`itemDetails ${css.itemDetails}`}>
          <span>From:</span>
          <span
            className={`eventTime ${css.eventTime}`}
          >{` ${startDateString} ${startTimeFormatted}${startAmPm}`}</span>
        </li>
      </React.Fragment>
    );
  } else if (start === null && end === null) {
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

export default parseYelpTime;
