import React, { useState } from "react";
import { RemovePart, LengthenPart, EndTimePart } from "./DragParts";
import { TitleWrapper } from "../../Parts";
import css from "./DragPiece.css";
import { useEffect } from "react";

const DragPieceDisplay = ({
  dragState,
  partType,
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
    wrapper: 200,
    inner: 400,
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

  const partToUse = () => (squarePart ? squarePart : part);

  const toDisplay = () => {
    if (partToUse() === squarePart) {
      return { display: `${onGrid ? "flex" : "none"}` };
    } else {
      return { display: `${onGrid ? "none" : "flex"}` };
    }
  };

  return partToUse().type === "custom" ? (
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
        ...isDragging(dragState, partToUse()),
        ...hoverClass,
        width: `${onGrid ? `${squareWrapperWidth}px` : "200px"}`,
        ...toDisplay(),
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
          titleClass={titleClass}
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
        ...isDragging(dragState, partToUse()),
        ...moreState,
        width: `${onGrid ? `${squareWrapperWidth}px` : "200px"}`,
        ...toDisplay(),
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
          titleClass={titleClass}
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
        ></EndTimePart>
      </div>
    </div>
  );
};

export default React.memo(DragPieceDisplay);
