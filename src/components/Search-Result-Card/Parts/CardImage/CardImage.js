import React, { useState } from "react";
import css from "./CardImage.css";
import { PartButton } from "../PartButton";
import { useEffect } from "react";

const CardImage = ({ source, item }) => {
  let [height, extend] = useState("100px");
  const extendPic = () => {
    return height === "100px" ? extend("250px") : extend("100px");
  };
  return (
    <div
      className={`searchResultCardImageWrapper ${css.searchResultCardImageWrapper}`}
      style={{ height, transition: "250ms" }}
      onClick={extendPic}
    >
      <img src={source} alt="" />
    </div>
  );
};

export default CardImage;
