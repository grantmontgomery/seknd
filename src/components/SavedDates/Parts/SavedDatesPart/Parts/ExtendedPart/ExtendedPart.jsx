import React from "react";
import css from "./ExtendedPart.css";
import { actions } from "../../../../../../redux";
// import {PlaceStars} from "../../../../../Search-Result-Card/Parts/PlaceStars"
import { PlaceStars } from "../../../../../Search-Result-Card/Parts";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const ExtendedPart = ({ part }) => {
  const dispatch = useDispatch();
  const { partsActions, squaresActions } = actions;
  const [details, setDetails] = useState({ detailOne: "", detailTwo: "" });

  useEffect(() => {
    const { detailOne, detailTwo } = part;
    setDetails({ detailOne, detailTwo });
  }, []);

  const customDetails = () => {
    const handleChange = ({ target }) => {
      const detailKey = target.attributes.name.value;
      setDetails({ ...details, [detailKey]: target.value });
      dispatch(
        partsActions("CHANGE_PART_DETAILS", {
          id: part.id,
          [detailKey]: target.value,
        })
      );
      dispatch(
        squaresActions({
          type: "CHANGE_SQUARE_PART_DETAILS",
          payload: { squareIndex: part.squareIndex, [detailKey]: target.value },
        })
      );
    };

    return (
      <React.Fragment>
        <input
          type="text"
          value={details.detailOne}
          name="detailOne"
          placeholder="Click to add details."
          onChange={handleChange}
        />
        <input
          type="text"
          value={details.detailTwo}
          name="detailTwo"
          placeholder="Click to add details."
          onChange={handleChange}
        />
      </React.Fragment>
    );
  };

  // const yelpVenue = () => part.business_id !== null ? part.business_id : part.

  const extendedDetails = () => {
    const freeOrPriceYelp = () =>
      part.is_free ? "Free" : `Starting at${part.parsedEventPrice}`;
    // const priceTicketMaster = () =>

    return part.source === "yelp" ? (
      <ul>
        <li>
          {part.type === "place" ? (
            <PlaceStars rating={part.rating}></PlaceStars>
          ) : (
            freeOrPriceYelp()
          )}
        </li>
        <li></li>
        <li>
          {part.type === "place" ? part.location.address1 : part.business_id}
        </li>
        <li>{`${part.location.city}, ${part.state} ${part.location.zip_code}`}</li>
      </ul>
    ) : (
      <ul>
        <li>{`Starting at${part.parsedEventPrice}`}</li>
        <li>{`${part.classifications[0].segment.name}, ${part.classifications[0].subGenre.name}`}</li>
        <li>{part.venues[0].name}</li>
        <li></li>
      </ul>
    );
  };

  const defineType = () =>
    part.type === "custom" ? customDetails() : extendedDetails();

  return (
    <div className={`extendedWrapper ${css.extendedWrapper}`}>
      <div className={`extendedDetails ${css.extendedDetails}`}>
        {defineType()}
      </div>
    </div>
  );
};

export default ExtendedPart;
