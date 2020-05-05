import React from "react";
import css from "./ExtendedPart.css";
import { actions } from "../../../../../../redux";
import { yelpReviewsTimes, parseYelpVenue } from "./Logic";
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
      part.is_free ? (
        "Free"
      ) : (
        <a
          href={part.tickets_url}
          className={`ticketPrice ${css.ticketPrice}`}
          target="_blank"
        >{`Starting at${part.parsedEventPrice}`}</a>
      );
    // const priceTicketMaster = () =>

    // const yelpVenueOr

    return part.source === "yelp" ? (
      <ul>
        <li>
          {part.type === "place" ? (
            <PlaceStars page="schedule" rating={part.rating}></PlaceStars>
          ) : (
            freeOrPriceYelp()
          )}
        </li>
        <li
          className={`${part.type === "place" ? "reviews" : "eventTime"} ${
            css[`${part.type === "place" ? "reviews" : "eventTime"}`]
          }`}
        >
          <a
            href={`${part.type === "place" ? part.url : part.event_site_url}`}
            target="_blank"
          >
            {yelpReviewsTimes(part)}
          </a>
        </li>
        <li className={`address ${css.address}`}>
          {part.type === "place"
            ? part.location.address1
            : parseYelpVenue(part.business_id)}
        </li>
        <li
          className={`address ${css.address}`}
        >{`${part.location.city}, ${part.location.state} ${part.location.zip_code}`}</li>
      </ul>
    ) : (
      <ul>
        <li>
          <a
            href={`${part.url}`}
            className={`ticketPrice ${css.ticketPrice}`}
            target="_blank"
          >
            {" "}
            {`Starting at${part.parsedEventPrice}`}
          </a>
        </li>
        {/* <li>{`${part.classifications[0].segment.name}`}</li> */}
        {/* <li>{`${part.classifications[0].segment.name}`}</li> */}

        {/* <li>{part.venues[0].name}</li> */}
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
