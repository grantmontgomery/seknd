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

  return (
    <div
      className={`partWrapper ${css.partWrapper}`}
      style={{ height: `${extended ? "200px" : "100px"}` }}
      onClick={() => (extended ? extend(false) : extend(true))}
    >
      <div className={`shortWrapper ${css.shortWrapper}`}>
        <div className={`partImageWrapper ${css.partImageWrapper}`}>
          <img src={`${sourceImage()}`} alt="" />
        </div>
        <div className={`detailsWrapper ${css.detailsWrapper}`}>
          <ul>
            <li>{part.name}</li>
            <li>{`From ${part.partStart}`}</li>
            <li>{`To ${part.partEnd}`}</li>
            <li></li>
          </ul>
        </div>
      </div>
      {() => (extended ? <ExtendedPart part={part}></ExtendedPart> : null)}
    </div>
  );
};

export default SavedDatesPart;
