import React, { useState } from "react";
import { RemovePart, LengthenPart, EndTimePart } from "./DragParts";
import { TitleWrapper } from "../../Parts";
import css from "./DragPiece.css";
import { useEffect } from "react";

const DragPieceDisplay = ({
  dragState,
  handleMouseDown,
  squarePart,
  part,
  squareWrapperWidth,
  squareInnerWidth,
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

  // useEffect(() => {
  //   const { wrapperWidth, innerWidth } = part;
  //   setState({
  //     ...moreState,
  //     wrapper: wrapperWidth,
  //     inner: innerWidth,
  //   });
  // }, [part.wrapperWidth, part.innerWidth]);

  const hoverOn = () => {
    setState({
      ...moreState,
      hoverClass: {
        boxShadow: `0px 0px 10px rgba(${partToUse().color}, 0.5)`,
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

  const { rotateArrow } = dragState;

  // const pieceWidth = () => {
  //   if(onGrid){
  //     return {width: part.wrapperWidth}
  //   }
  //   e
  // }

  const { hoverClass } = moreState;

  const partToUse = () => (squarePart ? squarePart : part);

  // const toDisplay = () => {
  //   if (partToUse() === squarePart) {
  //     return { display: `${onGrid ? "flex" : "none"}` };
  //   } else {
  //     return { display: `${onGrid ? "none" : "flex"}` };
  //   }
  // };

  const toDisplay = () => {
    if (partToUse() === squarePart) {
      return onGrid ? "display" : "noDisplay";
    } else {
      return onGrid ? "noDisplay" : "display";
    }
  };

  return partToUse().type === "custom" ? (
    <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${toDisplay()} ${css[`${toDisplay()}`]}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      // onTouchEnd={this.handleMouseUp}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      style={{
        ...isDragging(dragState, partToUse()),
        ...hoverClass,
        width: `${onGrid ? `${squareWrapperWidth}px` : "200px"}`,
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          width: `${onGrid ? `${squareInnerWidth}px` : "400px"}`,
          transform: dragState.transformInner,
        }}
        type="drag"
      >
        <TitleWrapper
          part={partToUse()}
          squareWrapperWidth={squareWrapperWidth}
          page="scheduler"
          onGrid={onGrid}
        ></TitleWrapper>
        {/* {partType(partToUse(), titleClass)} */}
        {partToUse().onGrid ? (
          <LengthenPart rotateArrow={rotateArrow}></LengthenPart>
        ) : (
          <RemovePart></RemovePart>
        )}
        <EndTimePart
          changeLength={changeLength}
          timeLength={partToUse().timeLength}
        ></EndTimePart>
      </div>
    </div>
  ) : (
    <div
      className={`datePartsPieceWrapper ${css.datePartsPieceWrapper} ${
        partToUse().type
      } ${css[`${partToUse().type}`]} ${toDisplay()} ${css[`${toDisplay()}`]}`}
      type="drag"
      // onClick={moreInfo}
      onMouseDown={handleMouseDown}
      // onTouchStart={this.handleMouseDown}
      // onMouseEnter={hoverOn}
      // onMouseLeave={hoverOff}
      style={{
        ...isDragging(dragState, partToUse()),
        ...moreState,
        width: `${onGrid ? `${squareWrapperWidth}px` : "200px"}`,
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          transform: dragState.transformInner,
          width: `${onGrid ? `${squareInnerWidth}px` : "400px"}`,
        }}
        type="drag"
      >
        <TitleWrapper
          part={partToUse()}
          squareWrapperWidth={squareWrapperWidth}
          onGrid={onGrid}
          page="scheduler"
        ></TitleWrapper>
        {/* {partType(part, titleClass)} */}
        {partToUse().onGrid ? (
          <LengthenPart rotateArrow={rotateArrow}></LengthenPart>
        ) : (
          <RemovePart></RemovePart>
        )}
        <EndTimePart
          changeLength={changeLength}
          timeLength={partToUse().timeLength}
          timeString={partToUse().partStringLength}
        ></EndTimePart>
      </div>
    </div>
  );
};

export default React.memo(DragPieceDisplay);
