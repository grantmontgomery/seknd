import fetch from "node-fetch";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux";

const PlacesCallNew = state => {
  const { places, where, radius } = state;
  const { placesActions } = actions;
  console.log("Starting Places Call");
  return async dispatch => {
    try {
      console.log("First Step");

      dispatch(placesActions.placesStepsAPI("LOADING"));
      let yelpBusinesses = await fetch(
        "http://localhost:5000/yelpBusinessSearch",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ places, where, radius })
        }
      );
      let yelpBusinessesData = await yelpBusinesses.json();
      const { businesses } = yelpBusinessesData;
      businesses.forEach(business => (business["type"] = "venue"));
      dispatch(
        placesActions.placesStepsAPI({ type: "YELP", payload: businesses })
      );
      dispatch(placesActions.placesStepsAPI("FINISH"));
      console.log("Finished");
    } catch {
      console.log("Error");
      dispatch(placesActions.placesStepsAPI("ERROR"));
    }
  };
};

export default PlacesCallNew;
