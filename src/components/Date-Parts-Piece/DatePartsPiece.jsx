import React from "react";
import { Logic } from "./Logic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./DatePartsPiece.css";
import eventsReducerAPI from "../../redux/reducers/eventsReducerAPI";

const DatePartsPiece = ({ part }) => {
  const { partType } = Logic;
  const { partsActions } = actions;
  const Events = useSelector(state => state.eventsReducerAPI);
  const Places = useSelector(state => state.placesReducerAPI);
  const dispatch = useDispatch();
  const removePart = event => {
    event.preventDefault();
    if (part.type === "event") {
      const { items } = Events;
      for (let i = 0; i < items.length; i++) {
        if (part.id === items[i].id) {
          items[i].inParts = false;
        }
      }
    } else {
      const { items } = Places;
      for (let i = 0; i < items.length; i++) {
        if (part.id === items[i].id) {
          items[i].inParts = false;
        }
      }
    }
    dispatch(partsActions("REMOVE_PART", part.id));
  };
  return (
    <div className={`datePartsPieceWrapper ${css.datePartsPieceWrapper}`}>
      {partType(part)}
      <button className={`partRemove ${css.partRemove}`} onClick={removePart}>
        -
      </button>
    </div>
  );
};

export default DatePartsPiece;
