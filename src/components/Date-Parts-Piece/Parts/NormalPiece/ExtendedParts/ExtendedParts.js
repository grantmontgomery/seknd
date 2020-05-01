import React, { useState, useEffect } from "react";
import placePartPrice from "../placePartPrice";
import { actions } from "../../../../../redux";
import css from "exte";
import { useSelector, useDispatch } from "react-redux";

const ExtendedParts = ({ type, part }) => {
  const [details, setDetails] = useState({ detailOne: "", detailTwo: "" });
  const dispatch = useDispatch();
  const { squaresActions, partsActions } = actions;

  useEffect(() => {
    const { detailOne, detailTwo } = part;
    setDetails({ detailOne, detailTwo });
  }, []);

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
        {partDetails.map((part) => (
          <React.Fragment>
            <div className={`partDetailText ${css.partDetailText}`}>{part}</div>
          </React.Fragment>
        ))}
      </div>
    );
  } else if (type === "place") {
    const cityDetail = (part) => {
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
    const priceDetail = (part) => {
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
      const detailKey = target.attributes.name.value;
      setDetails({ ...details, [detailKey]: target.value });
      dispatch(
        partsActions("CHANGE_PART_DETAILS", {
          id: part.id,
          [detailKey]: target.value,
        })
      );
      dispatch(
        squaresActions({
          type: "CHANGE_SQUARE_PART_DETAILS",
          payload: { squareIndex: part.squareIndex, [detailKey]: target.value },
        })
      );
    };
    // const handleChange = ({ target }) => {
    //   //This function works, I don't know how it does, but do not touch anything inside this.

    //   const detailKey = target.attributes.name.value;

    //   setDetails(state => ({ ...state, [`${detailKey}`]: target.value }));

    //   let inputList = [];

    //   inputList.push(target.value);

    //   part[detailKey] = inputList.join();
    // };

    return (
      <div className={`partDetailWrapper ${css.partDetailWrapper}`}>
        <div className={`customDetailWrapper ${css.customDetailWrapper}`}>
          <input
            className={`customTypeDetails ${css.customTypeDetails}`}
            type="text"
            name="detailOne"
            placeholder="Click to add details."
            value={details.detailOne}
            onChange={handleChange}
          />
        </div>
        <div className={`customDetailWrapper ${css.customDetailWrapper}`}>
          <input
            className={`customTypeDetails ${css.customTypeDetails}`}
            type="text"
            name="detailTwo"
            placeholder="Click to add details."
            value={details.detailTwo}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
};

export default ExtendedParts;
