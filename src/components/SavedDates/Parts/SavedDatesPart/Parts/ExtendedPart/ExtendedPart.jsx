import React from "react";
import css from "./ExtendedPart.css";
import { actions } from "../../../../../../redux";
import { useDispatch } from "react-redux";

const ExtendedPart = ({ part }) => {
  const dispatch = useDispatch();
  const { partsActions } = actions;

  const customDetails = () => {
    return (
      <React.Fragment>
        <input
          type="text"
          value={part.detailTwo}
          placeholder="Click to add details."
          onChange={({ target }) =>
            dispatch(
              partsActions("CHANGE_PART_DETAILS", { detailOne: target.value })
            )
          }
        />
        <input
          type="text"
          value={part.detailOne}
          placeholder="Click to add details."
          onChange={({ target }) =>
            dispatch(
              partsActions("CHANGE_PART_DETAILS", { detailTwo: target.value })
            )
          }
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

  return (
    <div className={`extendedWrapper ${css.extendedWrapper}`}>
      <div className={`extendedDetails ${css.extendedDetails}`}>
        {() => (part.type === "custom" ? customDetails() : extendedDetails())}
      </div>
    </div>
  );
};

export default ExtendedPart;
