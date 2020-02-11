import React from "react";
import css from "../DatePartsPiece.css";

const partType = part => {
  if (part.type === "event") {
    if (part.source === "ticketmaster") {
      return (
        <React.Fragment>
          <div
            className={`partImageWrapper ${css.searchResultCardImageWrapper}`}
          >
            <img src={part.images[0].url} alt="" />
          </div>
          <div className={`partTitleWrapper ${css.partTitleWrapper}`}>
            {part.name}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className={`partImageWrapper ${css.partImageWrapper}`}>
            <img src={part.image_url} alt="" />
          </div>
          <div className={`partTitleWrapper ${css.partTitleWrapper}`}>
            {part.name}
          </div>
        </React.Fragment>
      );
    }
  } else {
    if (part.source === "yelp") {
      return (
        <React.Fragment>
          <div className={`partImageWrapper ${css.partImageWrapper}`}>
            <img src={part.image_url} alt="" />
          </div>

          <div className={`partTitleWrapper ${css.partTitleWrapper}`}>
            {part.name}
          </div>
        </React.Fragment>
      );
    }
  }
};

export default partType;