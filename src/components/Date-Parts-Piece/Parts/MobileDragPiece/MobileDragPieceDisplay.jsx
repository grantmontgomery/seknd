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
  onGrid,
}) => {
  const partToUse = () => (squarePart ? squarePart : part);

  // const toDisplay = () => {
  //   if (partToUse() === squarePart) {
  //     return { display: `${onGrid ? "flex" : "none"}` };
  //   } else {
  //     return { display: `${onGrid ? "none" : "flex"}` };
  //   }
  // };

  // const toDisplay = () => {
  //   switch (partToUse()) {
  //     case squarePart:
  //       return onGrid ? "display" : "noDisplay";
  //     case part:
  //       return onGrid ? "noDisplay" : "display";
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
      className={`mobileDragWrapper ${css.mobileDragWrapper} ${toDisplay()} ${
        css[`${toDisplay()}`]
      }`}
      onTouchStart={handleTouchStart}
      // onTouchEnd={handleTouchEnd}
      style={{
        ...isDragging(dragState, partToUse()),
        width: `${onGrid ? `${squareWrapperWidth}px` : "100px"}`,
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          width: `${onGrid ? `${squareInnerWidth}px` : "200px"}`,
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
          <LengthenPart></LengthenPart>
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
      className={`mobileDragWrapper ${css.mobileDragWrapper} ${
        partToUse().type
      } ${css[`${partToUse().type}`]} ${toDisplay()} ${css[`${toDisplay()}`]}`}
      type="drag"
      // onClick={moreInfo}
      onTouchStart={handleTouchStart}
      style={{
        ...isDragging(dragState, partToUse()),
        width: `${onGrid ? `${squareWrapperWidth}px` : "100px"}`,
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          transform: dragState.transformInner,
          width: `${onGrid ? `${squareInnerWidth}px` : "200px"}`,
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
          <LengthenPart></LengthenPart>
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
