import React, { Component } from "react";
import MobileDragPieceDisplay from "./MobileDragPieceDisplay";
import {
  timePosition,
  findIndexOrder,
  endTimePosition,
} from "../DragPiece/DragLogic";
import { connect } from "react-redux";
import { actions } from "../../../../redux/actions";

class MobileDragPieceLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      isMoving: false,
      originalX: 0,
      originalY: 0,
      translateX: 0,
      translateY: 0,
      lastTranslateX: 0,
      lastTranslateY: 0,
      extended: false,
      draggingElement: null,
      droppable: null,
    };
  }

  changeLength = (value, pixels) => {
    const { partsActions, squaresActions } = actions;
    const { part, dispatch, Hours, Squares } = this.props;
    const innerPixels = pixels * 2;
    dispatch(
      partsActions("PART_CHANGE_LENGTH", {
        partStringLength: value,
        desktopDrag: {
          wrapperWidth: pixels,
          innerWidth: innerPixels,
        },
        mobileDrag: {
          wrapperWidth: pixels / 2,
          innerWidth: pixels,
        },
        id: this.partToUse().id,
        partEnd: timePosition(
          endTimePosition(this.partToUse().squareIndex, pixels),
          Hours,
          Squares
        ),
        endingIndex: this.partToUse().squareIndex + pixels / 100 - 1,
      })
    );
    dispatch(
      squaresActions({
        type: "CHANGE_SQUARE_PART_LENGTH",
        payload: {
          partStringLength: value,
          squareIndex: this.partToUse().squareIndex,
          desktopDrag: {
            wrapperWidth: pixels,
            innerWidth: innerPixels,
          },
          mobileDrag: {
            wrapperWidth: pixels / 2,
            innerWidth: pixels,
          },
          partEnd: timePosition(
            endTimePosition(this.partToUse().squareIndex, pixels),
            Hours,
            Squares
          ),
          endingIndex: this.partToUse().squareIndex + pixels / 100 - 1,
        },
      })
    );
  };

  extendPiece() {
    const { extended } = this.state;
    return extended
      ? this.setState((state) => ({ ...state, extended: false }))
      : this.setState((state) => ({ ...state, extended: true }));
  }

  partToUse() {
    const { squarePart, part } = this.props;
    return squarePart ? squarePart : part;
  }

  componentWillUnmount() {
    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
  }

  handleTouchStart = ({ touches, currentTarget }) => {
    const { target, clientX, clientY } = touches[0];
    if (target.getAttribute("type") !== "drag") {
      window.removeEventListener("touchmove", this.handleTouchMove);
      window.removeEventListener("touchend", this.handleTouchEnd);
      if (
        target.className.includes("removePart") ||
        target.className.includes("xWrapper")
      ) {
        this.removePart();
      } else if (
        target.className.includes("lengthenWrapper") ||
        target.className.includes("oWrapper")
      ) {
        // this.lengthenPart();
        this.extendPiece();
      }
    } else {
      window.addEventListener("touchmove", this.handleTouchMove);
      window.addEventListener("touchend", this.handleTouchEnd);
      currentTarget.hidden = true;
      currentTarget.childNodes[0].hidden = true;
      currentTarget.childNodes[0].childNodes.forEach((element) => {
        element.childNodes.forEach((subelement) => (subelement.hidden = true));
        element.hidden = true;
      });
      const elemBelow = document.elementFromPoint(clientX, clientY);
      currentTarget.hidden = false;
      currentTarget.childNodes[0].hidden = false;
      currentTarget.childNodes[0].childNodes.forEach((element) => {
        element.childNodes.forEach((subelement) => (subelement.hidden = false));
        element.hidden = false;
      });

      //Solution with adding InvisibleWrapper over dateParts List

      // const piecesWrapper = document.getElementsByClassName(
      //   `${partsCSS.piecesWrapper}`
      // )[0].childNodes[0];
      // const datePartsWrapper = document.getElementsByClassName(
      //   `${partsCSS.datePartsWrapper}`
      // )[0];

      // piecesWrapper.removeChild(currentTarget);
      // datePartsWrapper.append(currentTarget);

      this.setState({
        isDragging: true,
        originalX: clientX,
        originalY: clientY,
        draggingElement: currentTarget,
        droppable: elemBelow,
      });
    }
  };

  handleTouchEnd = () => {
    const { droppable, draggingElement } = this.state;
    const { part, dispatch, Squares, Hours, Scheduled } = this.props;
    const { squaresActions, partsActions } = actions;
    const { rows } = Scheduled;
    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
    if (
      droppable.className.includes("mobileSquare") === false ||
      droppable === null
    ) {
      const list = document.getElementById("list-wrapper");

      if (this.partToUse().onGrid === true) {
        dispatch(
          squaresActions({
            type: "SQUARE_PART_OFFGRID",
            payload: { index: this.partToUse().squareIndex },
          })
        );
        dispatch(partsActions("PART_OFF_GRID", { id: this.partToUse().id }));
      }

      // const dateParts = document.getElementsByClassName(
      //   `${partsCSS.piecesWrapper}`
      // )[0].childNodes[0];

      // for(let i = 0; i < Squares.length; i++){
      //   if(Squares[i].parts.length > 0){
      //     const squarePart = Squares[i].parts[0]
      //     squarePart.id === part.id ?
      //   }
      // }

      // dispatch(
      //   partsActions("PART_OFF_GRID", {
      //     id: this.partToUse().id,
      //   })
      // );

      // draggingElement.hidden = true;

      // dateParts.appendChild(draggingElement);
    } else {
      // const piecesWrapper = document.getElementsByClassName(
      //   `${partsCSS.piecesWrapper}`
      // )[0].childNodes[0];

      const squares = document.getElementsByClassName("mobileSquare");
      // console.log(droppable);
      // droppable.appendChild(draggingElement);

      if (this.partToUse().onGrid === true) {
        for (let i = 0; i < squares.length; i++) {
          if (droppable === squares[i]) {
            if (i !== this.partToUse().squareIndex) {
              dispatch(
                partsActions("PART_SQUARE_INDEX", {
                  id: this.partToUse().id,
                  squareIndex: i,
                  partStart: timePosition(i, Hours, Squares),
                  partEnd: timePosition(
                    endTimePosition(
                      i,
                      this.partToUse().mobileDrag.wrapperWidth
                    ),
                    Hours,
                    Squares
                  ),
                  endingIndex:
                    i - 1 + this.partToUse().mobileDrag.wrapperWidth / 50,
                  ...findIndexOrder(rows, i),
                })
              );
              dispatch(
                squaresActions({
                  type: "ADD_PART_TO_SQUARE",
                  payload: {
                    part: {
                      ...this.partToUse(),
                      onGrid: true,
                      squareIndex: i,
                      partStart: timePosition(i, Hours, Squares),
                      partEnd: timePosition(
                        endTimePosition(
                          i,
                          this.partToUse().mobileDrag.wrapperWidth
                        ),
                        Hours,
                        Squares
                      ),
                      endingIndex:
                        i - 1 + this.partToUse().mobileDrag.wrapperWidth / 50,
                      ...findIndexOrder(rows, i),
                    },
                    index: i,
                  },
                })
              );
              dispatch(
                squaresActions({
                  type: "REMOVE_PART_FROM_SQUARE",
                  payload: { squareIndex: this.partToUse().squareIndex },
                })
              );
            }
          }
        }
      } else {
        for (let i = 0; i < squares.length; i++) {
          if (droppable === squares[i]) {
            dispatch(
              partsActions("PART_SQUARE_INDEX", {
                id: this.partToUse().id,
                squareIndex: i - Squares.length,
                partStart: timePosition(i - Squares.length, Hours, Squares),
                partEnd: timePosition(
                  endTimePosition(
                    i - Squares.length,
                    this.partToUse().mobileDrag.wrapperWidth
                  ),
                  Hours,
                  Squares
                ),
                endingIndex:
                  i -
                  Squares.length -
                  1 +
                  this.partToUse().mobileDrag.wrapperWidth / 50,
                ...findIndexOrder(rows, i - Squares.length),
              })
            );

            dispatch(
              squaresActions({
                type: "ADD_PART_TO_SQUARE",
                payload: {
                  part: {
                    ...this.partToUse(),
                    onGrid: true,
                    squareIndex: i - Squares.length,
                    partStart: timePosition(i - Squares.length, Hours, Squares),
                    partEnd: timePosition(
                      endTimePosition(
                        i - Squares.length,
                        this.partToUse().mobileDrag.wrapperWidth
                      ),
                      Hours,
                      Squares
                    ),
                    endingIndex:
                      i -
                      Squares.length -
                      1 +
                      this.partToUse().mobileDrag.wrapperWidth / 50,
                    ...findIndexOrder(rows, i),
                  },
                  index: i - Squares.length,
                },
              })
            );
          }
        }
      }

      // dispatch(
      //   partsActions("PART_TIMES", {
      //     id: part.id,
      //     partStart: timePosition(part.squareIndex, Hours, Squares),
      //   })
      // );

      // part.partStart = timePosition(part.squareIndex, Hours, Squares);
    }
    this.setState((state) => ({
      ...state,
      translateX: 0,
      isMoving: false,
      translateY: 0,
      originalX: 0,
      originalY: 0,
      lastTranslateX: 0,
      lastTranslateY: 0,
      isDragging: false,
      draggingElement: null,
      droppable: null,
    }));
  };

  removePart = () => {
    const { partsActions } = actions;
    const { part, Places, Events, dispatch } = this.props;
    if (this.partToUse().type === "event") {
      const { items } = Events;
      for (let i = 0; i < items.length; i++) {
        if (this.partToUse().id === items[i].id) {
          items[i].inParts = false;
        }
      }
    } else {
      const { items } = Places;
      for (let i = 0; i < items.length; i++) {
        if (this.partToUse().id === items[i].id) {
          items[i].inParts = false;
        }
      }
    }
    dispatch(partsActions("REMOVE_PART", this.partToUse().id));
  };

  handleTouchMove = ({ touches }) => {
    const { isDragging, droppable } = this.state;
    const { draggingElement } = this.state;
    const { clientX, clientY } = touches[0];
    if (isDragging) {
      draggingElement.hidden = true;
      draggingElement.childNodes[0].hidden = true;
      draggingElement.childNodes[0].childNodes.forEach((element) => {
        element.childNodes.forEach((subElement) => (subElement.hidden = true));
        element.hidden = true;
      });

      const elemBelow = document.elementFromPoint(clientX, clientY);
      draggingElement.hidden = false;
      draggingElement.childNodes[0].hidden = false;
      draggingElement.childNodes[0].childNodes.forEach((element) => {
        element.childNodes.forEach((subElement) => (subElement.hidden = false));

        element.hidden = false;
      });

      this.setState((state) => ({
        droppable: elemBelow,
        translateX: clientX + state.lastTranslateX - state.originalX,
        translateY: clientY + state.lastTranslateY - state.originalY,
      }));
    }
  };

  isDragging(
    { isDragging, translateX, isMoving, translateY, droppable },
    { wrapperWidth, partLocation }
  ) {
    return isDragging
      ? {
          transform: `translate(${translateX}px, ${translateY}px) rotate(5deg)`,
          cursor: "grabbing",
          position: `${isMoving ? "absolute" : "relative"}`,
          zIndex: 1000,
          transition: "none",
          boxShadow: "0 3px 6px 1px rgba(50, 50, 50, 0.5)",
          width:
            droppable.getAttribute("type") === "parts"
              ? "200px"
              : `${wrapperWidth}px`,
        }
      : {
          transform: "translate(0, 0)",
          position: "relative",
          cursor: "grab",
          zIndex: 1,
          transition: "transform 500ms",
          width: partLocation === "parts" ? "200px" : `${wrapperWidth}px`,
        };
  }

  render() {
    const {
      part,
      onGrid,
      squareWrapperWidth,
      squareInnerWidth,
      squarePart,
    } = this.props;

    return (
      <MobileDragPieceDisplay
        squarePart={squarePart}
        onGrid={squarePart ? squarePart.onGrid : onGrid}
        dragState={this.state}
        handleTouchStart={this.handleTouchStart}
        handleTouchEnd={this.handleTouchEnd}
        squareWrapperWidth={squareWrapperWidth}
        squareInnerWidth={squareInnerWidth}
        part={part}
        extendPiece={this.extendPiece}
        changeLength={this.changeLength}
        isDragging={this.isDragging}
      ></MobileDragPieceDisplay>
    );
  }
}

export default connect((store) => {
  return {
    Events: store.eventsReducerAPI,
    Places: store.placesReducerAPI,
    Grid: store.dateGridReducer,
    dispatch: store.dispatch,
    Parts: store.datePartsReducer,
    Scheduled: store.scheduledPartsReducer,
    Squares: store.squaresReducer,
    Hours: store.hoursReducer,
  };
})(MobileDragPieceLogic);
