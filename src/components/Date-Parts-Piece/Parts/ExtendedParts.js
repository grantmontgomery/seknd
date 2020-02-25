import React from "react";
import placePartPrice from "./placePartPrice";
import css from "../DatePartsPiece.css";

const ExtendedParts = ({ type, part }) => {
  if (type === "event") {
    const partDetails = [];
    if ("parsedStartTime" in part) {
      partDetails.push(`From:${part.parsedStartTime}`);
    }
    if ("parsedEventPrice" in part) {
      const price =
        part.parsedEventPrice !== "Free"
          ? `Starting at ${part.parsedEventPrice}`
          : "Free";
      partDetails.push(price);
    }
    return (
      <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
        {partDetails.map(part => (
          <React.Fragment>
            <div className={`partDetailText ${css.partDetailText}`}>{part}</div>
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  } else if (type === "place") {
    const cityDetail = part => {
      if ("city" in part.location) {
        return (
          <React.Fragment>
            <div className={`partDetailText ${css.partDetailText}`}>
              {part.location.city}
            </div>
            <br />
          </React.Fragment>
        );
      }
    };
    const priceDetail = part => {
      if ("price" in part) {
        return (
          <React.Fragment>
            <div className={`partDetailText ${css.partDetailText}`}>
              {placePartPrice(part.source, part.price)}
            </div>
            <br />
          </React.Fragment>
        );
      }
    };
    return (
      <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
        {cityDetail(part)}
        {priceDetail(part)}
      </div>
    );
  } else if (type === "custom") {
    return <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>;
  }
};

export default ExtendedParts;
