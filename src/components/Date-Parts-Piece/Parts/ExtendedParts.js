import React from "react";
import css from "../DatePartsPiece.css";

const ExtendedParts = ({ type, part }) => {
  if (type === "event") {
    const partDetails = [];
    if ("parsedStartTime" in part) {
      partDetails.push(`From ${part.parsedStartTime}`);
    }
    if ("parsedEventPrice" in part) {
      partDetails.push(`Starting at ${part.parsedEventPrice}`);
    }
    return (
      <React.Fragment>
        {partDetails.map(part => (
          <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
            {part}
          </div>
        ))}
      </React.Fragment>
    );
  } else {
    const partDetails = [];
    if ("city" in part.location) {
      partDetails.push(part.location.city);
    }
    if ("price" in part) {
      partDetails.push(part.price);
    }
    return (
      <React.Fragment>
        {partDetails.map(part => (
          <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
            {part}
          </div>
        ))}
      </React.Fragment>
    );
  }
};

export default ExtendedParts;
