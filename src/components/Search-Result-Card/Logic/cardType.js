import React from "react";
import css from "../SearchResultCard.css";
import toSingular from "./toSingluar";
import parseYelpData from "./parseYelpData";
import { Parts } from "../Parts";

const cardType = item => {
  const { PartButton } = Parts;

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
              <li className={`itemDetails ${css.itemDetails}`}>
                {item.time_start}
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {item._embedded.venues[0].name}
              </li>
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
                {parseYelpData(item.categories)}
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {item.time_start}
              </li>
              <li className={`itemDetails ${css.itemDetails}`}>
                {parseYelpData(item.business_id)}
              </li>
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
