import React from "react";
import { limitPartTitle } from "../../Logic";
import css from "./TitleWrapper.css";

const TitleWrapper = ({
  part,
  onGrid,
  titleClass,
  squareWrapperWidth,
  page,
}) => {
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
      <div className={`partImageWrapper ${css.partImageWrapper} }`} type="drag">
        <img src={sourceImage()} alt="" />
      </div>
      <div
        className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
        style={{
          width: `${
            page === "scheduler" && onGrid ? squareWrapperWidth - 100 : 100
          }px`,
        }}
        type="drag"
      >
        <div type="drag">{limitPartTitle(part.name)}</div>
      </div>
    </React.Fragment>
  );
};

export default TitleWrapper;
