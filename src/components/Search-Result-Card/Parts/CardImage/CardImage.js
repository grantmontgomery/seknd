import React, { useState } from "react";
import css from "./CardImage.css";
import { PartButton } from "../PartButton";
import { useEffect } from "react";

const CardImage = ({ source, item }) => {
  const [imageState, setImage] = useState("retracted");

  const handleImage = () =>
    imageState === "retracted" ? setImage("extended") : setImage("retracted");

  return (
    <div
      className={`searchResultCardImageWrapper ${
        css.searchResultCardImageWrapper
      } ${imageState} ${css[`${imageState}`]}`}
      onClick={handleImage}
    >
      <img src={source} alt="" />
    </div>
  );
};

export default CardImage;
