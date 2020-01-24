import React from "react";
import css from "./PlacesSearch.css";

const PlacesSearch = () => {
  return (
    <div className={`placesSearchWrapper ${css.placesSearchWrapper}`}>
      <div className={`placesSearchTextWrapper ${css.placesSearchTextWrapper}`}>
        <p>What type of places are you looking for?</p>
      </div>
      <input
        className={`placesWhat ${css.placesWhat}`}
        placeholder="Bars, Restaurants, Sushi, etc."
        type="text"
      />
    </div>
  );
};

export default PlacesSearch;
