import fetch from "node-fetch";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux";

const { placesActions } = actions;

const yelpBusinesses = ({ where, radius, places }) => {
  return fetch("http://localhost:5000/yelpBusinessSearch", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ places, where, radius })
  });
};

const PlacesCallNew = ({ where, radius, places }) => {
  console.log("places call triggered");
  return dispatch => {
    dispatch(placesActions.placesStepsAPI("LOADING"));
    console.log("loading");
    return yelpBusinesses({ where, radius, places })
      .then(data => data.json())
      .then(businesses => {
        businesses.forEach(business => (business["type"] = "venue"));
        dispatch(placesActions.placesStepsAPI("YELP"));
        dispatch(placesActions.placesStepsAPI("FINISH"));
        console.log(businesses);
      })
      .catch(error => console.log(error.message));
  };
};

export default PlacesCallNew;