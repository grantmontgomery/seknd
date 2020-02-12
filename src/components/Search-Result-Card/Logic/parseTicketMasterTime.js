import React from "react";
import css from "../SearchResultCard.css";

const parseTicketMasterTime = (startDate, startTime, url) => {
  let start = startDate + "T" + startTime;
  if (start !== null) {
    let startDate = new Date(start);
    let startTimeString = startDate.toLocaleTimeString();
    let startDateString = startDate.toLocaleDateString();
    let startTimeStringLength = startTimeString.length;
    let startTimeFormatted = startTimeString.substring(
      0,
      startTimeStringLength - 6
    );
    let startAmPm = startTimeString.substring(startTimeStringLength - 3);

    console.log(startDateString, startTimeString, startTimeFormatted);

    return (
      <React.Fragment>
        <li className={`itemDetails ${css.itemDetails}`}>
          {`Start: ${startDateString} ${startTimeFormatted}${startAmPm}`}
        </li>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <li className={`itemDetails ${css.itemDetails}`}>
          <a href={url} target="_blank">
            Click here to check times
          </a>
        </li>
      </React.Fragment>
    );
  }
};

export default parseTicketMasterTime;
