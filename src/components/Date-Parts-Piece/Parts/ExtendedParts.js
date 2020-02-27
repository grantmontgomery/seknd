import React, { useState } from "react";
import placePartPrice from "./placePartPrice";
import css from "../DatePartsPiece.css";
import { useSelector } from "react-redux";

const ExtendedParts = ({ type, part }) => {
  let [details, setDetails] = useState({ detailOne: "", detailTwo: "" });

  if (type === "event") {
    const partDetails = [];
    if ("parsedStartTime" in part) {
      partDetails.push(`From:${part.parsedStartTime}`);
    }
    if ("parsedEventPrice" in part) {
      const price =
        part.parsedEventPrice !== "Free"
          ? `Starting at ${part.parsedEventPrice}`
          : "Free";
      partDetails.push(price);
    }
    return (
      <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
        {partDetails.map(part => (
          <React.Fragment>
            <div className={`partDetailText ${css.partDetailText}`}>{part}</div>
          </React.Fragment>
        ))}
      </div>
    );
  } else if (type === "place") {
    const cityDetail = part => {
      if ("city" in part.location) {
        return (
          <React.Fragment>
            <div className={`partDetailText ${css.partDetailText}`}>
              {part.location.city}
            </div>
          </React.Fragment>
        );
      }
    };
    const priceDetail = part => {
      if ("price" in part) {
        return (
          <React.Fragment>
            <div className={`partDetailText ${css.partDetailText}`}>
              {placePartPrice(part.source, part.price)}
            </div>
          </React.Fragment>
        );
      }
    };
    return (
      <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
        {cityDetail(part)}
        {priceDetail(part)}
      </div>
    );
  } else if (type === "custom") {
    const handleChange = ({ target }) => {
      //This function works, I don't know how it does, but do not touch anything inside this.

      const detailKey = target.attributes.name.value;

      setDetails(state => ({ ...state, [`${detailKey}`]: target.value }));

      let inputList = [];

      inputList.push(target.value);

      part[detailKey] = inputList.join();
    };

    return (
      <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
        <div className={`customDetailWrapper ${css.customDetailWrapper}`}>
          <input
            className={`customTypeDetails ${css.customTypeDetails}`}
            type="text"
            name="detailOne"
            placeholder="Click to add details."
            value={part.detailOne}
            onChange={handleChange}
          />
        </div>
        <div className={`customDetailWrapper ${css.customDetailWrapper}`}>
          <input
            className={`customTypeDetails ${css.customTypeDetails}`}
            type="text"
            name="detailTwo"
            placeholder="Click to add details."
            value={part.detailTwo}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
};

export default ExtendedParts;
