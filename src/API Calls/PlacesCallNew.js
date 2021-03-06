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
    dispatch(placesActions.placesStepsAPI("PLACESCLEAR"));
    dispatch(placesActions.placesStepsAPI("PLACESLOADING"));
    try {
      dispatch(placesActions.placesStepsAPI("YELPPLACESLOADING"));
      let results = await yelpBusinesses({ location, radius, places });
      let data = await results.json();
      const { businesses } = data;
      businesses.forEach(
        business => (
          (business["type"] = "place"),
          (business["source"] = "yelp"),
          (business.inParts = false)
        )
      );
      dispatch(
        placesActions.placesStepsAPI({
          type: "YELPPLACES",
          payload: businesses
        })
      );
      dispatch(placesActions.placesStepsAPI("PLACESFINISHED"));
    } catch {
      dispatch(placesActions.placesStepsAPI("YELPPLACESERROR"));
      dispatch(placesActions.placesStepsAPI("PLACESFINISHED"));
    }
  };
};

export default PlacesCallNew;
