import React from "react";
import css from "../DatePartsPiece.css";

const ExtendedParts = ({ type, source }) => {
  if (type === "event") {
    return source === "yelp" ? (
      <React.Fragment>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
      </React.Fragment>
    );
  } else {
    return source === "yelp" ? (
      <React.Fragment>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
        <div className={`partDetailWrapper ${css.partDetailWrapper}`}></div>
      </React.Fragment>
    );
  }
};

export default ExtendedParts;
