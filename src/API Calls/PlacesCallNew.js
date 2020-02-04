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
  console.log("places call triggered");
  return async dispatch => {
    dispatch(placesActions.placesStepsAPI("PLACESLOADING"));
    console.log("loading");
    try {
      console.log("places api attempt");
      let results = await yelpBusinesses({ location, radius, places });
      let data = await results.json();
      const { businesses } = data;
      businesses.forEach(business => (business["type"] = "place"));
      dispatch(
        placesActions.placesStepsAPI({
          type: "PLACESYELP",
          payload: businesses
        })
      );
      dispatch(placesActions.placesStepsAPI("PLACESFINISH"));
    } catch {
      console.log("places api error");

      dispatch(placesActions.placesStepsAPI("PLACESERROR"));
    }
  };
};

export default PlacesCallNew;
