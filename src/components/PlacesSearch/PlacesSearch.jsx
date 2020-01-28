import React, { useState } from "react";
import css from "./PlacesSearch.css";
import { useCallback } from "react";

const PlacesSearch = props => {
  let [places, setPlaces] = useState("");

  const handlePlaces = useCallback(
    (event, places) => {
      places = event.target.value;
      return places;
    },
    [places]
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
        onChange={event => setPlaces(handlePlaces(event, places))}
      />
    </div>
  );
};

export default PlacesSearch;
