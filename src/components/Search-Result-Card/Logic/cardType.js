import React from "react";
import css from "../SearchResultCard.css";
import Logic from "./Logic";
import { Parts } from "../Parts";

const cardType = item => {
  const { PartButton } = Parts;
  const {
    setPrice,
    parseYelpTime,
    parseYelpData,
    parseTicketMasterTime,
    toSingular,
    ticketMasterCategories
  } = Logic;

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
              {ticketMasterCategories(item)}
              {parseTicketMasterTime(
                item.dates.start.localDate,
                item.dates.start.localTime,
                item.url
              )}
              <li className={`itemDetails ${css.itemDetails}`}>
                {item._embedded.venues[0].name}
              </li>
              {setPrice(item)}
            </ul>
          </div>
          <PartButton item={item}></PartButton>
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
                {parseYelpData(item.category)}
              </li>
              {parseYelpTime(
                item.time_start,
                item.time_end,
                item.event_site_url
              )}

              <li className={`itemDetails ${css.itemDetails}`}>
                {parseYelpData(item.business_id)}
              </li>
              {setPrice(item)}
            </ul>
          </div>
          <PartButton item={item}></PartButton>
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
                {`${toSingular(item.categories[0].title)}`}
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>{item.price}</li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {item.rating}
              </li>
            </ul>
          </div>
          <PartButton item={item}></PartButton>
        </React.Fragment>
      );
    }
  }
};

export default cardType;
