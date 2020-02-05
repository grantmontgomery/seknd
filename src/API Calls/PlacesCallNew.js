import fetch from "node-fetch";
import { actions } from "../redux";

const { placesActions } = actions;

const yelpBusinesses = ({ location, radius, places }) => {
  const term = places;
  const radiusInt = parseInt(radius);
  return fetch("http://localhost:5000/yelpBusinessSearch", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ term, location, radiusInt })
  });
};

const PlacesCallNew = ({ location, radius, places }) => {
  return async dispatch => {
    dispatch(
      placesActions.placesStepsAPI({
        type: "PLACESLOADING",
        payload: "LOADING"
      })
    );
    try {
      dispatch(
        placesActions.placesStepsAPI({
          type: "YELPPLACESLOADING",
          payload: "YELPLOADING"
        })
      );
      let results = await yelpBusinesses({ location, radius, places });
      let data = await results.json();
      const { businesses } = data;
      businesses.forEach(business => (business["type"] = "place"));
      dispatch(
        placesActions.placesStepsAPI({
          type: "YELPPLACES",
          payload: businesses
        })
      );
      dispatch(placesActions.placesStepsAPI("PLACESFINISHED"));
    } catch {
      dispatch(
        placesActions.placesStepsAPI({
          type: "YELPERROR",
          payload: "YELPERROR"
        })
      );
      dispatch(placesActions.placesStepsAPI("PLACESFINISHED"));
    }
  };
};

export default PlacesCallNew;
