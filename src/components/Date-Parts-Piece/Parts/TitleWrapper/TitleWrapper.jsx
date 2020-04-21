import React from "react";
import { limitPartTitle } from "../../Logic";
import css from "../../DatePartsPiece.css";

const TitleWrapper = ({ part, squareWrapperWidth, titleClass, page }) => {
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
    <React.Fragment>
      <div className={`partImageWrapper ${css.partImageWrapper} }`}>
        <img src={sourceImage()} alt="" />
      </div>
      <div
        className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
        style={{
          width: `${page === "scheduler" ? squareWrapperWidth - 100 : 100}px`,
        }}
      >
        <div>{limitPartTitle(part.name)}</div>
      </div>
    </React.Fragment>
  );
};

export default TitleWrapper;
