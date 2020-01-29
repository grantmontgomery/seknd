import React, { useState } from "react";
import css from "./PlacesSearch.css";
import { useCallback } from "react";

const PlacesSearch = props => {
  const { places, handleState } = props;

  const handlePlaces = useCallback(
    event => {
      const places = event.target.value;
      handleState({ places });
    },
    [props]
  );

  return (
    <div className={`placesSearchWrapper ${css.placesSearchWrapper}`}>
      <div className={`placesSearchTextWrapper ${css.placesSearchTextWrapper}`}>
        <p>What type of places are you looking for?</p>
      </div>
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
