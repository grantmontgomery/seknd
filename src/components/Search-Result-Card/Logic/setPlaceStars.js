import React, { useState, useEffect } from "react";
import css from "../SearchResultCard.css";

const setPlaceStars = ({ item }) => {
  let [rating, setRating] = useState(0);
  useEffect(() => {
    setRating((rating = item.rating));
  }, [item.rating]);
  const setStars = rating => {
    if (Number.isInteger(item.rating) || item.rating % 1 === 0) {
    } else {
    }
  };
  return (
    <React.Fragment>
      <li className={`itemDetails ${css.itemDetails}`}>
        <div className={`ratingWrapper ${css.ratingWrapper}`}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </li>
    </React.Fragment>
  );
};

export default setPlaceStars;
