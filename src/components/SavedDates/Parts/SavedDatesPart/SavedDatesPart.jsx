import React, { useState } from "react";
import css from "./SavedDatesPart.css";
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
      {/* <div className={`partImageWrapper ${css.partImageWrapper}`}>
        <img src={`${sourceImage()}`} alt="" />
      </div>
      <div className={`detailsWrapper ${css.detailsWrapper}`}>
        <div className={`titleWrapper ${css.titleWrapper}`}>
          <div className={`text ${css.text}`}>{part.name}</div>
        </div>
        <div className={`timesWrapper ${css.timesWrapper}`}>
          <div className={`time ${css.time}`}>From {`${part.partStart}`}</div>
          <div className={`time ${css.time}`}>To {`${part.partEnd}`}</div>
        </div>
      </div> */}
    </div>
  );
};

export default SavedDatesPart;
