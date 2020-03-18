import React from "react";
import css from "../DragPiece.css";
import { limitPartTitle } from "../../../Logic";

const partType = (part, titleClass) => {
  if (part.type === "event") {
    if (part.source === "ticketmaster") {
      return (
        <React.Fragment>
          <div
            className={`partImageWrapper ${css.partImageWrapper} }`}
            type="drag"
          >
            <img src={part.images[0].url} type="drag" alt="" />
          </div>
          <div
            className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
            type="drag"
          >
            <div type="drag">{limitPartTitle(part.name)}</div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className={`partImageWrapper ${css.partImageWrapper} `}
            type="drag"
          >
            <img src={part.image_url} alt="" type="drag" />
          </div>
          <div
            className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
            type="drag"
          >
            <div type="drag">{limitPartTitle(part.name)}</div>

            {/* <span>{limitPartTitle(part.name)}</span> */}
          </div>
        </React.Fragment>
      );
    }
  } else if (part.type === "place") {
    if (part.source === "yelp") {
      return (
        <React.Fragment>
          <div
            className={`partImageWrapper ${css.partImageWrapper}`}
            type="drag"
          >
            <img src={part.image_url} alt="" type="drag" />
          </div>

          <div
            className={`partTitleWrapper ${css.partTitleWrapper} ${titleClass} ${css[titleClass]}`}
            type="drag"
          >
            <div type="drag">{limitPartTitle(part.name)}</div>

            {/* <span>{limitPartTitle(part.name)}</span> */}
          </div>
        </React.Fragment>
      );
    }
  } else if (part.type === "custom") {
    return (
      <React.Fragment>
        <div
          className={`partImageWrapper ${css.partImageWrapper}`}
          type="drag"
        ></div>

        <div
          className={`partTitleWrapper ${css.partTitleWrapper}`}
          style={{ color: `rgb(${part.color})` }}
          type="drag"
        >
          <div type="drag">{limitPartTitle(part.name)}</div>

          {/* <span>{limitPartTitle(part.name)}</span> */}
        </div>
      </React.Fragment>
    );
  }
};

export default partType;
