import React from "react";
import css from "../SearchResultCard.css";
import Logic from "./Logic";
import { Parts } from "../Parts";

const cardType = item => {
  const { PartButton, PlaceStars } = Parts;
  const {
    parseYelpCity,
    checkYelpVenue,
    limitVenue,
    setEventPrice,
    setPlacePrice,
    parseYelpTime,
    parseYelpData,
    parseTicketMasterTime,
    toSingular,
    ticketMasterCategories,
    limitTitle
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
                  {limitTitle(item.name)}
                </a>
              </li>
              {ticketMasterCategories(item)}
              {parseTicketMasterTime(item)}
              <li className={`itemDetails ${css.itemDetails}`}>
                {limitVenue(item._embedded.venues[0].name)}
              </li>
              {setEventPrice(item)}
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
                  {limitTitle(item.name)}
                </a>
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {parseYelpData(item.category)}
              </li>
              {parseYelpTime(item)}

              {checkYelpVenue(item)}

              {setEventPrice(item)}
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
                  {limitTitle(item.name)}
                </a>
              </li>

              <li className={`itemDetails ${css.itemDetails}`}>
                {`${toSingular(item.categories[0].title)}`}
              </li>

              {setPlacePrice(item)}

              <PlaceStars rating={item.rating}></PlaceStars>
              <li className={`itemDetails ${css.itemDetails}`}>
                <a
                  href={item.url}
                  target="_blank"
                  className={`reviews ${css.reviews}`}
                >{`${item.review_count} reviews`}</a>
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {item.location.display_address[0]}
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {parseYelpCity(item.location.display_address[1])}
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
