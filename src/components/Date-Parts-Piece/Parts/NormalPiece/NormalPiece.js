import React from "react";
import { partType } from "./NormalLogic";
import { TitleWrapper } from "../TitleWrapper";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../../redux";
import css from "./NormalPiece.css";
import { ExtendedParts } from "../ExtendedParts";
// import { ExtendedParts } from "./ExtendedParts";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const NormalPiece = ({ part, index }) => {
  const { partsActions, squaresActions } = actions;
  const Events = useSelector((state) => state.eventsReducerAPI);
  const Places = useSelector((state) => state.placesReducerAPI);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    titleClass: "",
    wrapperTypeClass: "",
    draggable: false,
    pageTypeClass: "",
  });
  let [wrapperMorphClass, morphClass] = useState("smallClass");

  useEffect(() => {
    if (part.type === "event") {
      setState({ titleClass: "eventTitle", wrapperTypeClass: "eventWrapper" });
    } else if (part.type === "place") {
      setState({
        titleClass: "placeTitle",
        wrapperTypeClass: "placeWrapper",
      });
    }
  }, [part.type]);

  const removePart = (event) => {
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

    dispatch(
      squaresActions({
        type: "REMOVE_PART_FROM_SQUARE",
        payload: { squareIndex: part.squareIndex },
      })
    );
    dispatch(partsActions("REMOVE_PART", part.id));
  };

  const moreInfo = ({ target }) => {
    const className = target.className;
    console.log(target.getAttribute("type"));
    if (target.getAttribute("type") !== "remove") {
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
    }
  };

  const extendedSmall = useCallback(() => {
    if (wrapperMorphClass === "extendedClass") {
      return <ExtendedParts type={part.type} part={part}></ExtendedParts>;
    }
  }, [wrapperMorphClass]);

  const hoverOn = () => {
    setState((state) => ({
      ...state,
      hoverClass: {
        boxShadow: `0px 0px 10px rgba(${part.color}, 0.5)`,
        transition: "250ms ease-out",
      },
    }));
  };

  const hoverOff = () => {
    setState((state) => ({ ...state, hoverClass: {} }));
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
      {/* {partType(part, titleClass)} */}
      <TitleWrapper
        part={part}
        titleClass={titleClass}
        page="search"
      ></TitleWrapper>
      <div
        className={`removePart ${css.removePart}`}
        onClick={removePart}
        type="remove"
      >
        <div className={`xWrapper ${css.xWrapper}`} type="remove">
          X
        </div>
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
      <div
        className={`removePart ${css.removePart}`}
        onClick={removePart}
        type="remove"
      >
        <div className={`xWrapper ${css.xWrapper}`} type="remove">
          X
        </div>
      </div>
      {extendedSmall()}
    </div>
  );
};

export default NormalPiece;
