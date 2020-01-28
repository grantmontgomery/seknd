import React, { useState } from "react";
import css from "./PlacesSearch.css";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";

const PlacesSearch = props => {
  let [places, setPlaces] = useState("");
  const { inputActions } = actions;
  const dispatch = useDispatch();

  const handlePlaces = useCallback(
    event => {
      places = event.target.value;
      dispatch(inputActions.changeInputs({ places }));

      props.handleState({ places });
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
        onChange={event => setPlaces(handlePlaces(event))}
      />
    </div>
  );
};

export default PlacesSearch;
