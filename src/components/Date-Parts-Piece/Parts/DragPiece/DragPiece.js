import React from "react";
import { partType } from "./DragLogic";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../../redux";
import css from "./DragPiece.css";
import { ExtendedParts } from "../ExtendedParts";
import { useEffect, useState, useMemo } from "react";
import { useCallback } from "react";

const POSITION = { x: 0, y: 0 };

const DragPiece = ({ part }) => {
  const { partsActions } = actions;
  const Events = useSelector(state => state.eventsReducerAPI);
  const Places = useSelector(state => state.placesReducerAPI);
  const parts = useSelector(state => state.datePartsReducer);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
    droppableElement: null
  });

  const { isDragging, origin, translation, droppableElement } = state;

  // let [wrapperMorphClass, morphClass] = useState("smallClass");

  const appendToPlace = droppableElement => {
    if (
      droppableElement.className !== "square-wrapper" ||
      droppableElement === null
    ) {
      const list = document.getElementById("list-wrapper");
      console.log("appending to list");
      list.append(state.draggingElement);
    } else if (droppableElement.className === "square-wrapper") {
      droppableElement.append(state.draggingElement);
      console.log("appending to a square");
    } else {
      console.log("error sensing dropped element");
    }
    console.log(state.draggingElement);
    for (let i = 0; i < parts.length; i++) {
      if (part.id === parts[i].id) {
        if (droppableElement.className === "square-wrapper") {
          parts[i].location = "grid";
        } else {
          parts[i].location = "list";
        }
        console.log(parts[i].location);
      }
    }
  };

  const handleMouseDown = useCallback(({ target, clientX, clientY }) => {
    target.hidden = true;
    const elemBelow = document.elementFromPoint(clientX, clientY);
    target.hidden = false;
    console.log("DRAG   START");
    console.log(elemBelow);
    setState(state => ({
      ...state,
      draggingElement: target,
      droppableElement: elemBelow,
      isDragging: true,
      origin: { x: clientX, y: clientY }
    }));
  }, []);

  const handleMouseUp = useCallback(
    ({ clientX, clientY }) => {
      state.draggingElement.hidden = true;

      const droppableElement = document.elementFromPoint(clientX, clientY);
      setState(state => ({ ...state, droppableElement }));
      state.draggingElement.hidden = false;

      appendToPlace(droppableElement);

      setState(state => ({
        ...state,
        isDragging: false
      }));
    },
    [isDragging]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      setState(state => ({
        ...state,
        origin: POSITION,
        translation: POSITION,
        isDragging: false
      }));
    }

    if (part.type === "event") {
      setState({ titleClass: "eventTitle", wrapperTypeClass: "eventWrapper" });
    } else if (part.type === "place") {
      setState({
        titleClass: "placeTitle",
        wrapperTypeClass: "placeWrapper"
      });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

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

  // const moreInfo = ({ target }) => {
  //   const className = target.className;
  //   if (
  //     wrapperMorphClass === "smallClass" &&
  //     !className.includes("customTypeDetails")
  //   ) {
  //     morphClass("extendedClass");
  //   } else if (
  //     wrapperMorphClass === "extendedClass" &&
  //     !className.includes("customTypeDetails")
  //   ) {
  //     morphClass("smallClass");
  //   }
  // };

  // const extendedSmall = useCallback(() => {
  //   if (wrapperMorphClass === "extendedClass") {
  //     return <ExtendedParts type={part.type} part={part}></ExtendedParts>;
  //   }
  // }, [wrapperMorphClass]);

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

  const styles = useMemo(
    () => ({
      cursor: isDragging ? "-webkit-grabbing" : "-webkit-grab",
      transform: isDragging
        ? `translate(${translation.x}px, ${translation.y}px) rotate(5deg)`
        : `translate(${translation.x}px, ${translation.y}px)`,
      zIndex: isDragging ? 1000 : 3,
      transition: "none",
      boxShadow: isDragging ? "0 3px 6px 1px rgba(50, 50, 50, 0.5)" : "none"
    }),
    [isDragging, translation]
  );

  const { titleClass, wrapperTypeClass, hoverClass, pageTypeClass } = state;

  const handleMouseMove = useCallback(
    ({ clientX, clientY, target }) => {
      if (isDragging) {
        target.hidden = true;
        const droppableElement = document.elementFromPoint(clientX, clientY);
        target.hidden = false;
        const translation = {
          x: clientX - origin.x,
          y: clientY - origin.y
        };
        setState(state => ({
          ...state,
          translation,
          droppableElement
        }));
      } else {
        setState(state => ({
          ...state,
          origin: POSITION,
          translation: POSITION,
          isDragging: false
        }));
      }
    },
    [origin, isDragging]
  );

  return part.type === "custom" ? (
    <div
      className={`datePartsPieceWrapper ${css.datePartsPieceWrapper} 
      ${pageTypeClass} ${css[`${pageTypeClass}`]}`}
      // onClick={moreInfo}
      onMouseDown={handleMouseDown}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      style={styles}
    >
      {partType(part, titleClass)}
      <div className={`removePart ${css.removePart}`} onClick={removePart}>
        <div className={`xWrapper ${css.xWrapper}`}>X</div>
      </div>
      {/* {extendedSmall()} */}
    </div>
  ) : (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${wrapperTypeClass} ${css[`${wrapperTypeClass}`]} 
      ${pageTypeClass} ${css[`${pageTypeClass}`]}`}
      // onClick={moreInfo}
      onMouseDown={handleMouseDown}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {partType(part, titleClass)}
      <div className={`removePart ${css.removePart}`} onClick={removePart}>
        <div className={`xWrapper ${css.xWrapper}`}>X</div>
      </div>
      {/* {extendedSmall()} */}
    </div>
  );
};

export default DragPiece;
