import React, { useState } from "react";
import css from "./PlacesSearch.css";
import { useCallback } from "react";

const PlacesSearch = ({ places, handleQuery, style }) => {
  const handlePlaces = useCallback(
    event => {
      const places = event.target.value;
      handleQuery({ places });
    },
    [places]
  );

  return (
    <div
      className={`placesSearchWrapper ${css.placesSearchWrapper} ${style} ${
        css[`${style}`]
      }`}
    >
      {/* <div className={`placesSearchTextWrapper ${css.placesSearchTextWrapper}`}>
        <p>What type of places are you looking for?</p>
      </div> */}
      <span>What type of places are you looking for?</span>

      <input
        className={`placesWhat ${css.placesWhat}`}
        placeholder="Bars, Restaurants, Sushi, etc."
        type="text"
        value={places}
        onChange={event => handlePlaces(event)}
      />
    </div>
  );
};

export default PlacesSearch;
