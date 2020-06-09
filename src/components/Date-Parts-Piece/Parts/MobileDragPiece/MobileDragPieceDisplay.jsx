import React, { useState } from "react";
import { MobileInnerInfo } from "./Parts";
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

  const changeInner = () => {
    const { extended } = dragState;
    return extended && onGrid === true ? (
      <React.Fragment>
        {displayLengthen()}
        {displayMobileInfo()}
        <EndTimePart
          part={partToUse()}
          partLength={partToUse().mobileDrag.wrapperWidth}
          name={partToUse().name}
          changeLength={changeLength}
          timeLength={partToUse().timeLength}
        ></EndTimePart>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <TitleWrapper
          part={partToUse()}
          squareWrapperWidth={squareWrapperWidth}
          page="mobilePiece"
          onGrid={onGrid}
        ></TitleWrapper>
        {displayLengthen()}
      </React.Fragment>
    );
  };

  const trackInnerWidth = () => {
    const { extended } = dragState;
    switch (extended) {
      case true:
        return "300px";
      case false:
        return `${onGrid ? `${squareWrapperWidth}` : "100px"}`;
    }
  };

  const displayLengthen = () => (onGrid ? <LengthenPart></LengthenPart> : null);

  const displayMobileInfo = () =>
    partToUse().mobileDrag.wrapperWidth < 200 ? (
      <MobileInnerInfo name={partToUse().name}></MobileInnerInfo>
    ) : null;

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
        }}
        type="drag"
      >
        {changeInner()}
      </div>
    </div>
  ) : (
    <div
      className={`mobileDragWrapper ${css.mobileDragWrapper} ${
        partToUse().type
      } ${css[`${partToUse().type}`]} ${toDisplay()} ${css[`${toDisplay()}`]}`}
      type="drag"
      onTouchStart={handleTouchStart}
      style={{
        ...isDragging(dragState, partToUse()),
        width: trackWrapperWidth(),
      }}
    >
      <div
        className={`dragInner ${css.dragInner}`}
        style={{
          // transform: dragState.transformInner,
          width: trackInnerWidth(),
        }}
        type="drag"
      >
        {changeInner()}
      </div>
    </div>
  );
};

export default React.memo(MobileDragPieceDisplay);
