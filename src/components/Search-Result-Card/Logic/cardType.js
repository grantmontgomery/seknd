import React from "react";
import css from "../SearchResultCard.css";

const cardType = (item) => {
  if (item.type === "events") {
    if (item.source === "ticketmaster") {
      return (
        <React.Fragment>
          <div
            className={`searchResultCardImageWrapper ${css.searchResultCardImageWrapper}`}
          >
            <img src={item.images[0].url} alt="" />
          </div>
          <div
            className={`searchResultCardTextWrapper ${css.searchResultCardTextWrapper}`}
          >
            <ul className={`itemText ${css.itemText}`}>
              <li className={`itemTitle ${css.itemTitle}`}>
                <a href={item.url} target="_blank">
                  {item.name}
                </a>
              </li>
              <li
                className={`itemDetails ${css.itemDetails}`}
              >{`${item.classifications[0].segment} ${item.classifications[0].genre} ${item.classifications[0].subGenre}`}</li>
              <li
                className={`itemDetails ${css.itemDetails}`}
              >{`${item.dates.start.localDate} ${item.dates.start.localTime}`}</li>
            </ul>
          </div>
          <button></button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className={`searchResultCardImageWrapper ${css.searchResultCardImageWrapper}`}
          >
            <img src={item.image_url} alt="" />
          </div>
          <div
            className={`searchResultCardTextWrapper ${css.searchResultCardTextWrapper}`}
          >
            <ul className={`itemText ${css.itemText}`}>
              <li className={`itemTitle ${css.itemTitle}`}>
                <a href={item.event_site_url} target="_blank">
                  {item.name}
                </a>
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {item.category}
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {item.time_start}
              </li>
            </ul>
          </div>
          <button></button>
        </React.Fragment>
      );
    }
  } else {
    if (item.source === "yelp") {
      return (
        <React.Fragment>
          <div
            className={`searchResultCardImageWrapper ${css.searchResultCardImageWrapper}`}
          >
            <img src="" alt="" />
          </div>
          <div
            className={`searchResultCardTextWrapper ${css.searchResultCardTextWrapper}`}
          ></div>
          <button></button>
        </React.Fragment>
      );
    }
  }
};

export default cardType;
