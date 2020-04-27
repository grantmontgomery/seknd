import React from "react";
import css from "./SavedDatesPart.css";

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
  return (
    <div className={`partWrapper ${css.partWrapper}`}>
      <div className={`partImageWrapper ${css.partImageWrapper}`}>
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
      </div>
    </div>
  );
};

export default SavedDatesPart;
