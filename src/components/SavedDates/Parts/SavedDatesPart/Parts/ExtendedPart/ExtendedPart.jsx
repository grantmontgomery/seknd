import React from "react";
import css from "./ExtendedPart.css";
import { actions } from "../../../../../../redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const ExtendedPart = ({ part }) => {
  const dispatch = useDispatch();
  const { partsActions, squaresActions } = actions;
  const [details, setDetails] = useState({ detailOne: "", detailTwo: "" });

  useEffect(() => {
    const { detailOne, detailTwo } = part;
    setDetails({ detailOne, detailTwo });
  }, []);

  const customDetails = () => {
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

    return (
      <React.Fragment>
        <input
          type="text"
          value={details.detailOne}
          name="detailOne"
          placeholder="Click to add details."
          onChange={handleChange}
        />
        <input
          type="text"
          value={details.detailTwo}
          name="detailTwo"
          placeholder="Click to add details."
          onChange={handleChange}
        />
      </React.Fragment>
    );
  };

  const extendedDetails = () => {
    return part.source === "yelp" ? (
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    ) : (
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  };

  const defineType = () =>
    part.type === "custom" ? customDetails() : extendedDetails();

  return (
    <div className={`extendedWrapper ${css.extendedWrapper}`}>
      <div className={`extendedDetails ${css.extendedDetails}`}>
        {defineType()}
      </div>
    </div>
  );
};

export default ExtendedPart;
