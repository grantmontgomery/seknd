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
      <div className={`textWrapper ${css.textWrapper}`}>
        <div className={`text ${css.text}`}>{part.name}</div>
      </div>
      <div className={`timesWrapper ${css.timesWrapper}`}>
        <div className={`timeWrapper ${css.timesWrapper}`}>
          From {`${part.partStart}`}
        </div>
        <div className={`timeWrapper ${css.timesWrapper}`}>
          To {`${part.partEnd}`}
        </div>
      </div>
    </div>
  );
};

export default SavedDatesPart;
