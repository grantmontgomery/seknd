import React, { useState } from "react";
import { RemovePart, LengthenPart, EndTimePart } from "./DragParts";
import css from "./DragPiece.css";
import { useEffect } from "react";

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
    wrapper: 200,
    inner: 400,
    hoverClass: {
      boxShadow: "",
      transition: "250ms ease-in",
    },
  });

  console.log();

  // useEffect(() => {
  //   const { wrapperWidth, innerWidth } = part;
  //   setState({
  //     ...moreState,
  //     wrapper: wrapperWidth,
  //     inner: innerWidth,
  //   });
  // }, [part.wrapperWidth, part.innerWidth]);

  console.log(moreState.wrapper);
  console.log(moreState.inner);
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
  //     return {width: part.wrapperWidth}
  //   }
  //   e
  // }

  const { wrapper, hoverClass, inner } = moreState;

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
      style={{
        ...isDragging(dragState, part),
        ...hoverClass,
        width: `${onGrid ? `${part.wrapperWidth}px` : "200px"}`,
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          width: `${onGrid ? `${part.innerWidth}px` : "400px"}`,
          transform: dragState.transformInner,
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
      style={{
        ...isDragging(dragState, part),
        ...moreState,
        width: `${onGrid ? `${part.wrapperWidth}px` : "200px"}`,
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          transform: dragState.transformInner,
          width: `${onGrid ? `${part.innerWidth}px` : "400px"}`,
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
