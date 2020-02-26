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

  const [state, setState] = useState({
    titleClass: "",
    wrapperTypeClass: "",
    draggable: false,
    pageTypeClass: ""
  });
  let [wrapperMorphClass, morphClass] = useState("smallClass");

  useEffect(() => {
    if (part.type === "event") {
      setState({ titleClass: "eventTitle", wrapperTypeClass: "eventWrapper" });
    } else if (part.type === "place") {
      setState({
        titleClass: "placeTitle",
        wrapperTypeClass: "placeWrapper"
      });
    }
    page === "scheduler"
      ? setState(state => ({
          ...state,
          draggable: true,
          pageTypeClass: "schedulerPage"
        }))
      : setState(state => ({
          ...state,
          draggable: false,
          pageTypeClass: "searchPage"
        }));
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
    const className = target.className;
    if (
      wrapperMorphClass === "smallClass" &&
      !className.includes("customTypeDetails")
    ) {
      morphClass("extendedClass");
    } else if (
      wrapperMorphClass === "extendedClass" &&
      !className.includes("customTypeDetails")
    ) {
      morphClass("smallClass");
    }
  };

  const extendedSmall = useCallback(() => {
    if (wrapperMorphClass === "extendedClass") {
      return <ExtendedParts type={part.type} part={part}></ExtendedParts>;
    }
  }, [wrapperMorphClass]);

  const hoverOn = () => {
    setState(state => ({
      ...state,
      hoverClass: {
        boxShadow: `0px 0px 10px rgba(${part.color}, 0.5)`,
        transition: "250ms ease-out"
      }
    }));
  };

  const hoverOff = () => {
    setState(state => ({ ...state, hoverClass: {} }));
  };

  const { titleClass, wrapperTypeClass, hoverClass, pageTypeClass } = state;

  return part.type === "custom" ? (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${wrapperMorphClass} ${css[`${wrapperMorphClass}`]}
      ${pageTypeClass} ${css[`${pageTypeClass}`]}`}
      onClick={moreInfo}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      style={hoverClass}
    >
      {partType(part, titleClass)}
      <div className={`removePart ${css.removePart}`} onClick={removePart}>
        <div className={`xWrapper ${css.xWrapper}`}>X</div>
      </div>
      {extendedSmall()}
    </div>
  ) : (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${wrapperTypeClass} ${
        css[`${wrapperTypeClass}`]
      } ${wrapperMorphClass} ${css[`${wrapperMorphClass}`]}
      ${pageTypeClass} ${css[`${pageTypeClass}`]}`}
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
