import React, { useState } from "react";
import { RemovePart, LengthenPart, EndTimePart } from "./DragParts";
import css from "./DragPiece.css";

const DragPieceDisplay = ({
  dragState,
  partType,
  handleMouseDown,
  part,
  changeLength,
  isDragging,
  onGrid,
}) => {
  const [moreState, setState] = useState({
    hoverClass: {
      boxShadow: "",
      transition: "250ms ease-in",
    },
  });
  const hoverOn = () => {
    setState({
      ...moreState,
      hoverClass: {
        boxShadow: `0px 0px 10px rgba(${part.color}, 0.5)`,
      },
    });
  };
  const hoverOff = () => {
    setState({
      ...moreState,
      hoverClass: {
        boxShadow: "",
      },
    });
  };

  const {
    titleClass,
    wrapperTypeClass,
    width,
    transformInner,
    rotateArrow,
    innerWidth,
  } = dragState;

  // const pieceWidth = () => {
  //   if(onGrid){

  //   }
  // }

  return part.type === "custom" ? (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${onGrid} ${css[`${onGrid}`]}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      // onTouchEnd={this.handleMouseUp}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      style={{ ...isDragging(dragState, part), ...moreState.hoverClass }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          width: `${part.partLocation === "parts" ? "400px" : width}`,
          transform: transformInner,
        }}
        type={"drag"}
      >
        {partType(part, titleClass)}
        {part.partLocation === "parts" ? (
          <RemovePart></RemovePart>
        ) : (
          <LengthenPart rotateArrow={rotateArrow}></LengthenPart>
        )}
        <EndTimePart
          changeLength={changeLength}
          timeLength={part.timeLength}
        ></EndTimePart>
      </div>
    </div>
  ) : (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${wrapperTypeClass} ${css[`${wrapperTypeClass}`]} ${onGrid} ${
        css[`${onGrid}`]
      }`}
      type="drag"
      // onClick={moreInfo}
      onMouseDown={handleMouseDown}
      // onTouchStart={this.handleMouseDown}
      // onMouseEnter={hoverOn}
      // onMouseLeave={hoverOff}
      style={{ ...isDragging(dragState, part), ...moreState }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          width: `${part.partLocation === "parts" ? "400px" : width}`,
          transform: transformInner,
        }}
        type={"drag"}
      >
        {partType(part, titleClass)}
        {part.partLocation === "parts" ? (
          <RemovePart></RemovePart>
        ) : (
          <LengthenPart rotateArrow={rotateArrow}></LengthenPart>
        )}
        <EndTimePart
          changeLength={changeLength}
          timeLength={part.timeLength}
        ></EndTimePart>
      </div>
    </div>
  );
};

export default DragPieceDisplay;
