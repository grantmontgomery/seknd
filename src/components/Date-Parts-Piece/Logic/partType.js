import React from "react";
import css from "../DatePartsPiece.css";
import limitPartTitle from "./limitPartTitle";

const partType = (part, titleClass) => {
  if (part.type === "event") {
    if (part.source === "ticketmaster") {
      return (
        <React.Fragment>
          <div className={`partImageWrapper ${css.partImageWrapper} }`}>
            <img src={part.images[0].url} alt="" />
          </div>
          <div
            className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
          >
            {limitPartTitle(part.name)}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className={`partImageWrapper ${css.partImageWrapper} `}>
            <img src={part.image_url} alt="" />
          </div>
          <div
            className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
          >
            {limitPartTitle(part.name)}
          </div>
        </React.Fragment>
      );
    }
  } else if (part.type === "place") {
    if (part.source === "yelp") {
      return (
        <React.Fragment>
          <div className={`partImageWrapper ${css.partImageWrapper}`}>
            <img src={part.image_url} alt="" />
          </div>

          <div
            className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
          >
            {limitPartTitle(part.name)}
          </div>
        </React.Fragment>
      );
    }
  } else if (part.type === "custom") {
    return (
      <React.Fragment>
        <div className={`partImageWrapper ${css.partImageWrapper}`}></div>

        <div
          className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
        >
          {limitPartTitle(part.name)}
        </div>
      </React.Fragment>
    );
  }
};

export default partType;
