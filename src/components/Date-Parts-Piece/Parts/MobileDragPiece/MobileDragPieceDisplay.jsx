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

  const toDisplay = () => {
    if (partToUse() === squarePart) {
      return onGrid ? "display" : "noDisplay";
    } else {
      return onGrid ? "noDisplay" : "display";
    }
  };

  const trackWrapperWidth = () => {
    const { extended } = dragState;
    switch (extended) {
      case true:
        return "300px";
      case false:
        return `${onGrid ? `${squareWrapperWidth}px` : "100px"}`;
    }
  };

  const trackInnerWidth = () => {
    const { extended } = dragState;
    switch (extended) {
      case true:
        return "600px";
      case false:
        return `${onGrid ? `${squareInnerWidth}` : "100px"}`;
    }
  };

  const displayLengthen = () => (onGrid ? <LengthenPart></LengthenPart> : null);

  return partToUse().type === "custom" ? (
    <div
      className={`mobileDragWrapper ${css.mobileDragWrapper} ${toDisplay()} ${
        css[`${toDisplay()}`]
      }`}
      onTouchStart={handleTouchStart}
      // onTouchEnd={handleTouchEnd}
      style={{
        ...isDragging(dragState, partToUse()),
        width: trackWrapperWidth(),
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          width: trackInnerWidth(),
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
        {displayLengthen()}

        <EndTimePart
          part={partToUse()}
          partLength={partToUse().mobileDrag.wrapperWidth}
          name={partToUse().name}
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
        width: trackWrapperWidth(),
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          transform: dragState.transformInner,
          width: trackInnerWidth(),
        }}
        type="drag"
      >
        <TitleWrapper
          part={partToUse()}
          squareWrapperWidth={squareWrapperWidth}
          onGrid={onGrid}
          page="scheduler"
        ></TitleWrapper>
        {/* <LengthenPart></LengthenPart> */}
        {displayLengthen()}

        <EndTimePart
          partLength={partToUse().mobileDrag.wrapperWidth}
          name={partToUse().name}
          changeLength={changeLength}
          timeLength={partToUse().timeLength}
          timeString={partToUse().partStringLength}
        ></EndTimePart>
      </div>
    </div>
  );
};

export default React.memo(MobileDragPieceDisplay);
