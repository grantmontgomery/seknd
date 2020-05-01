import React, { useState } from "react";
import css from "./SavedDatesPart.css";
import { ExtendedPart } from "./Parts";
import { useEffect } from "react";

const SavedDatesPart = ({ part }) => {
  const sourceImage = () => {
    if (part.source === "ticketmaster") {
      return part.images[0].url;
    } else if (part.source === "yelp") {
      return part.image_url;
    } else {
      return;
    }
  };

  const [extended, extend] = useState(false);

  const displayExtended = () =>
    extended ? <ExtendedPart part={part}></ExtendedPart> : null;

  return (
    <div
      className={`partWrapper ${css.partWrapper}`}
      style={{ height: `${extended ? "200px" : "100px"}` }}
    >
      <div className={`shortWrapper ${css.shortWrapper}`}>
        <div
          className={`partImageWrapper ${css.partImageWrapper}`}
          onClick={() => (extended ? extend(false) : extend(true))}
        >
          <img src={`${sourceImage()}`} alt="" />
        </div>
        <div
          className={`detailsWrapper ${css.detailsWrapper}`}
          onClick={() => (extended ? extend(false) : extend(true))}
        >
          <ul>
            <li>{part.name}</li>
            <li>{`From ${part.partStart}`}</li>
            <li>{`To ${part.partEnd}`}</li>
            <li></li>
          </ul>
        </div>
      </div>
      {displayExtended()}
    </div>
  );
};

export default SavedDatesPart;
