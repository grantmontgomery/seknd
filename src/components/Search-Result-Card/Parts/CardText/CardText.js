import React from "react";
import css from "./CardText.css";

const CardText = ({
  item,
  limitTitle,
  limitVenue,
  setEventPrice,
  ticketMasterCategories
}) => {
  return (
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
  );
};

export default CardText;
