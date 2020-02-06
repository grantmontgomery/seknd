import React from "react";
import css from "../SearchResultCard.css";

const cardType = (type, item) => {
  if (type === "events") {
    if (item.source === "ticketMaster") {
      return (
        <React.Fragment>
          <div
            className={`searchResultCardImageWrapper ${css.searchResultCardImageWrapper}`}
          >
            <img src="" alt="" />
          </div>
          <div
            className={`searchResultCardTextWrapper ${css.searchResultCardTextWrapper}`}
          ></div>
          <button></button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className={`searchResultCardImageWrapper ${css.searchResultCardImageWrapper}`}
          >
            <img src="" alt="" />
          </div>
          <div
            className={`searchResultCardTextWrapper ${css.searchResultCardTextWrapper}`}
          ></div>
          <button></button>
        </React.Fragment>
      );
    }
  } else {
    if (item.source === "yelp") {
      return (
        <React.Fragment>
          <div
            className={`searchResultCardImageWrapper ${css.searchResultCardImageWrapper}`}
          >
            <img src="" alt="" />
          </div>
          <div
            className={`searchResultCardTextWrapper ${css.searchResultCardTextWrapper}`}
          ></div>
          <button></button>
        </React.Fragment>
      );
    }
  }
};

export default cardType;
