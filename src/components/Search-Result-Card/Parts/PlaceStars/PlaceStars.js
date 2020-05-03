import React, { useState, useEffect } from "react";
import { FullStar } from "../FullStar";
import { HalfStar } from "../HalfStar";
import { EmptyStar } from "../EmptyStar";
import css from "../../SearchResultCard.css";

const PlaceStars = ({ rating }) => {
  const [state, setState] = useState({
    first: "empty",
    second: "empty",
    third: "empty",
    fourth: "empty",
    fifth: "empty",
  });

  const setStars = (rating) => {
    let ratingInt = Math.floor(rating);
    let remainder = rating - ratingInt;
    let keys = Object.keys(state);
    let alteredKeys = keys.slice(0, ratingInt);
    alteredKeys.forEach((key) => {
      setState((state) => ({ ...state, [key]: "full" }));
    });

    if (remainder > 0) {
      setState((state) => ({ ...state, [keys[ratingInt]]: "half" }));
    }
  };

  const whichStar = (key) => {
    if (state[key] === "full") {
      return <FullStar></FullStar>;
    } else if (state[key] === "empty") {
      return <EmptyStar></EmptyStar>;
    } else if (state[key] === "half") {
      return <HalfStar></HalfStar>;
    }
  };

  useEffect(() => {
    setStars(rating);
  }, [rating]);

  return (
    <div className={`ratingWrapper ${css.ratingWrapper}`}>
      <div className={`starWrapper ${css.starWrapper}`}>
        {whichStar("first")}
      </div>
      <div className={`starWrapper ${css.starWrapper}`}>
        {whichStar("second")}
      </div>
      <div className={`starWrapper ${css.starWrapper}`}>
        {whichStar("third")}
      </div>
      <div className={`starWrapper ${css.starWrapper}`}>
        {whichStar("fourth")}
      </div>
      <div className={`starWrapper ${css.starWrapper}`}>
        {whichStar("fifth")}
      </div>
    </div>
  );
};

export default PlaceStars;
