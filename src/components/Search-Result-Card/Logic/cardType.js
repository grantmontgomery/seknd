import React from "react";
import css from "../SearchResultCard.css";

const cardType = item => {
  const changeButton = () => {};

  if (item.type === "event") {
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
              >{`${item.classifications[0].segment.name} ${item.classifications[0].genre.name}`}</li>
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
          <button>+</button>
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
            <img src={item.image_url} alt="" />
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
              <li className={`itemDetails ${css.itemDetails}`}>
                {`${item.categories[0].title}`}
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>{item.price}</li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {item.rating}
              </li>
            </ul>
          </div>
          <button></button>
        </React.Fragment>
      );
    }
  }
};

export default cardType;
