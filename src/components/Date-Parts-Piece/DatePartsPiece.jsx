import React from "react";
import { Logic } from "./Logic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import css from "./DatePartsPiece.css";
import { ExtendedParts } from "./Parts";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const DatePartsPiece = ({ part, page }) => {
  const { partType } = Logic;
  const { partsActions } = actions;
  const Events = useSelector(state => state.eventsReducerAPI);
  const Places = useSelector(state => state.placesReducerAPI);
  const dispatch = useDispatch();

  const [state, setState] = useState({ titleClass: "", wrapperTypeClass: "", draggable: false });
  let [wrapperMorphClass, morphClass] = useState("smallClass");

  useEffect(() => {
    part.type === "event"
      ? setState({ titleClass: "eventTitle", wrapperTypeClass: "eventWrapper" })
      : setState({
          titleClass: "placeTitle",
          wrapperTypeClass: "placeWrapper"
        });
    page === "scheduler" ? setState(state => ({...state, draggable: true})) : setState(state => ({...state, draggable: false}))
  }, [part.type, page]);

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

  const moreInfo = ({ target }) => {
    const button = target;
    if (wrapperMorphClass === "smallClass") {
      morphClass("extendedClass");
    } else {
      morphClass("smallClass");
    }
  };

  const extendedSmall = useCallback(() => {
    if (wrapperMorphClass === "extendedClass") {
      return <ExtendedParts type={part.type} part={part}></ExtendedParts>;
    }
  }, [wrapperMorphClass]);

  const { titleClass, wrapperTypeClass } = state;

  return (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${wrapperTypeClass} ${
        css[`${wrapperTypeClass}`]
      } ${wrapperMorphClass} ${css[`${wrapperMorphClass}`]}`}
      onClick={moreInfo}
    >
      {partType(part, titleClass)}
      <div className={`removePart ${css.removePart}`} onClick={removePart}>
        <div className={`xWrapper ${css.xWrapper}`}>X</div>
      </div>
      {extendedSmall()}
    </div>
  );
};

export default DatePartsPiece;
