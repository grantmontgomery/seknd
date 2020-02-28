import React from "react";
import css from "../NormalPiece.css";
import { limitPartTitle } from "../../../Logic";

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
            <div>{limitPartTitle(part.name)}</div>
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
            <div>{limitPartTitle(part.name)}</div>

            {/* <span>{limitPartTitle(part.name)}</span> */}
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
            <div>{limitPartTitle(part.name)}</div>

            {/* <span>{limitPartTitle(part.name)}</span> */}
          </div>
        </React.Fragment>
      );
    }
  } else if (part.type === "custom") {
    return (
      <React.Fragment>
        <div className={`partImageWrapper ${css.partImageWrapper}`}></div>

        <div
          className={`partTitleWrapper ${css.partTitleWrapper}`}
          style={{ color: `rgb(${part.color})` }}
        >
          <div>{limitPartTitle(part.name)}</div>

          {/* <span>{limitPartTitle(part.name)}</span> */}
        </div>
      </React.Fragment>
    );
  }
};

export default partType;
