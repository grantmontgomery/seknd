import React, { useState } from "react";
import { RemovePart, LengthenPart, EndTimePart } from "../DragPiece/DragParts";
import { TitleWrapper } from "../../Parts";
import css from "./MobileDragPiece.css";
import { useEffect } from "react";

const MobileDragPieceDisplay = ({
  dragState,
  handleTouchStart,
  squarePart,
  part,
  squareWrapperWidth,
  squareInnerWidth,
  changeLength,
  isDragging,
  handleTouchEnd,
  onGrid,
}) => {
  // const [moreState, setState] = useState({
  //   wrapper: 100,
  //   inner: 200,
  //   hoverClass: {
  //     boxShadow: "",
  //     transition: "250ms ease-in",
  //   },
  // });

  // useEffect(() => {
  //   const { wrapperWidth, innerWidth } = part;
  //   setState({
  //     ...moreState,
  //     wrapper: wrapperWidth,
  //     inner: innerWidth,
  //   });
  // }, [part.wrapperWidth, part.innerWidth]);

  const { width, transformInner, rotateArrow, innerWidth } = dragState;

  // const pieceWidth = () => {
  //   if(onGrid){
  //     return {width: part.wrapperWidth}
  //   }
  //   e
  // }

  // const { wrapper, hoverClass, inner } = moreState;

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
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        ...isDragging(dragState, partToUse()),
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
          page="scheduler"
          onGrid={onGrid}
        ></TitleWrapper>
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
      } ${css[`${partToUse().type}`]} ${onGrid} ${css[`${onGrid}`]}`}
      type="drag"
      // onClick={moreInfo}
      onTouchStart={handleTouchStart}
      // onTouchStart={this.handleTouchStart}
      // onMouseEnter={hoverOn}
      // onMouseLeave={hoverOff}
      style={{
        ...isDragging(dragState, partToUse()),
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
          onGrid={onGrid}
          page="scheduler"
        ></TitleWrapper>
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

export default React.memo(MobileDragPieceDisplay);
