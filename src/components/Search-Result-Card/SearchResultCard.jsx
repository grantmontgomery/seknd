import React from "react";
import { Logic } from "./Logic";
import css from "./SearchResultCard.css";
import { useEffect } from "react";
import { useState } from "react";

const SearchResultCard = ({ item }) => {
  const { cardType } = Logic;
  let [shadowStyle, setStyle] = useState("");
  useEffect(() => {
    item.type === "event" ? setStyle("eventShadow") : setStyle("placeShadow");
  }, [item.type]);

  return (
    <div
      className={`searchResultCardWrapper ${
        css.searchResultCardWrapper
      } ${shadowStyle} ${css[`${shadowStyle}`]}`}
    >
      {cardType(item)}
    </div>
  );
};

export default SearchResultCard;
