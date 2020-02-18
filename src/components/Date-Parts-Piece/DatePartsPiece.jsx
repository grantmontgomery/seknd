import React from "react";
import { Logic } from "./Logic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./DatePartsPiece.css";
import { ThreeDots } from "./Parts";
import eventsReducerAPI from "../../redux/reducers/eventsReducerAPI";
import { useEffect, useState } from "react";
import { useContext } from "react";

const DatePartsPiece = ({ part }) => {
  const { partType } = Logic;
  const { partsActions } = actions;
  const Events = useSelector(state => state.eventsReducerAPI);
  const Places = useSelector(state => state.placesReducerAPI);
  const dispatch = useDispatch();

  const [state, setState] = useState({ titleClass: "", wrapperClass: "" });

  useEffect(() => {
    part.type === "event"
      ? setState({ titleClass: "eventTitle", wrapperClass: "eventWrapper" })
      : setState({ titleClass: "placeTitle", wrapperClass: "placeWrapper" });
  }, [part.type]);
  console.log(state);
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

  const { titleClass, wrapperClass } = state;

  return (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${wrapperClass} ${css[`${wrapperClass}`]}`}
    >
      {partType(part, titleClass)}
      <button className={`partRemove ${css.partRemove}`} onClick={removePart}>
        <ThreeDots></ThreeDots>
      </button>
    </div>
  );
};

export default DatePartsPiece;
