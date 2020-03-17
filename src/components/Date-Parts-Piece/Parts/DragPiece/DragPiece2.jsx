import React, { Component } from "react";
import css from "./DragPiece.css";
import partsCSS from "../../../Date-Parts/DateParts.css";
import { RemovePart, LengthenPart, EndTimePart } from "./DragParts";
import squareCSS from "../../../Scheduler-Grid-Square/SchedulerGridSquare.css";
import { partType, timePosition } from "./DragLogic";
import { connect } from "react-redux";
import { actions } from "../../../../redux/actions";

class DragPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleClass: "",
      wrapperTypeClass: "",
      isDragging: false,
      isMoving: false,
      originalX: 0,
      originalY: 0,
      translateX: 0,
      translateY: 0,
      lastTranslateX: 0,
      lastTranslateY: 0,
      draggingElement: null,
      droppable: null,
      width: "200px",
      transformInner: "translateX(0px)"
    };
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  componentDidMount() {
    this.props.part.type === "event"
      ? this.setState(state => ({
          ...state,
          titleClass: "eventTitle",
          wrapperTypeClass: "eventWrapper"
        }))
      : this.setState(state => ({
          ...state,
          titleClass: "placeTitle",
          wrapperTypeClass: "placeWrapper"
        }));
  }

  handleMouseDown = ({ currentTarget, target, clientX, clientY }) => {
    console.log(currentTarget);
    console.log(currentTarget.childNodes[0].childNodes);
    console.log(target);
    if (
      target.className.includes("removePart") ||
      target.className.includes("xWrapper")
    ) {
      this.removePart();
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("mouseup", this.handleMouseUp);
    } else if (
      target.className.includes("lengthenWrapper") ||
      target.className.includes("oWrapper")
    ) {
      this.lengthenPart();
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("mouseup", this.handleMouseUp);
    } else {
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);

      currentTarget.hidden = true;
      currentTarget.childNodes[0].hidden = true;
      currentTarget.childNodes[0].childNodes.forEach(
        element => (element.hidden = true)
      );
      const elemBelow = document.elementFromPoint(clientX, clientY);
      console.log(elemBelow);
      currentTarget.hidden = false;
      currentTarget.childNodes[0].hidden = false;
      currentTarget.childNodes[0].childNodes.forEach(
        element => (element.hidden = false)
      );

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
        droppable: elemBelow
      });
    }
  };

  handleMouseUp = () => {
    const { droppable, draggingElement } = this.state;
    const { part, dispatch, Squares, Hours } = this.props;
    const { squaresActions } = actions;
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);

    if (
      droppable.className.includes("squareWrapper") === false ||
      droppable === null
    ) {
      const list = document.getElementById("list-wrapper");

      if (part.onGrid === true) {
        Squares[part.squareIndex].parts = [];
      }

      const dateParts = document.getElementsByClassName(
        `${partsCSS.piecesWrapper}`
      )[0].childNodes[0];

      part.onGrid = false;
      part.partLocation = "parts";
      part.squareIndex = null;
      part.partStart = "";
      part.partEnd = "";
      dateParts.appendChild(draggingElement);
    } else {
      // const piecesWrapper = document.getElementsByClassName(
      //   `${partsCSS.piecesWrapper}`
      // )[0].childNodes[0];

      const squares = document.getElementsByClassName("squareWrapper");

      droppable.appendChild(draggingElement);
      part.partLocation = "grid";
      if (part.onGrid === true) {
        Squares[part.squareIndex].parts = [];
        for (let i = 0; i < squares.length; i++) {
          if (droppable === squares[i]) {
            part.squareIndex = i;
            dispatch(
              squaresActions({
                type: "ADD_PART_TO_SQUARE",
                payload: { part, index: i }
              })
            );
          }
        }
      } else {
        part.onGrid = true;
        for (let i = 0; i < squares.length; i++) {
          if (droppable === squares[i]) {
            part.squareIndex = i;
            dispatch(
              squaresActions({
                type: "ADD_PART_TO_SQUARE",
                payload: { part, index: i }
              })
            );
          }
        }
      }

      part.partStart = timePosition(part.squareIndex, Hours, Squares);

      console.log(timePosition(part.squareIndex, Hours, Squares));
    }
    this.setState(state => ({
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
      droppable: null
    }));
  };

  removePart = () => {
    const { partsActions } = actions;
    const { part, Places, Events, dispatch } = this.props;
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

  lengthenPart = () => {
    const { transformInner } = this.state;
    console.log("Lengthen part");
    if (transformInner === "translateX(0px)") {
      this.setState(state => ({
        ...state,
        transformInner: "translateX(-160px)"
      }));
    } else {
      this.setState(state => ({ ...state, transformInner: "translateX(0px)" }));
    }
  };

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { draggingElement } = this.state;

    if (isDragging) {
      draggingElement.hidden = true;
      draggingElement.childNodes[0].hidden = true;
      draggingElement.childNodes[0].childNodes.forEach(
        element => (element.hidden = true)
      );

      const elemBelow = document.elementFromPoint(clientX, clientY);
      console.log(elemBelow);
      draggingElement.hidden = false;
      draggingElement.childNodes[0].hidden = false;
      draggingElement.childNodes[0].childNodes.forEach(
        element => (element.hidden = false)
      );

      this.setState(state => ({
        droppable: elemBelow,
        translateX: clientX + state.lastTranslateX - state.originalX,
        translateY: clientY + state.lastTranslateY - state.originalY
      }));
    }
  };

  isDragging({ isDragging, translateX, isMoving, translateY }) {
    const { part, display } = this.props;

    const { color } = this.props;
    return isDragging
      ? {
          transform: `translate(${translateX}px, ${translateY}px) rotate(5deg)`,
          cursor: "grabbing",
          position: `${isMoving ? "absolute" : "relative"}`,
          zIndex: 1000,
          transition: "none",
          boxShadow: "0 3px 6px 1px rgba(50, 50, 50, 0.5)"
        }
      : {
          transform: "translate(0, 0)",
          position: "relative",
          cursor: "grab",
          zIndex: 1,
          transition: "transform 500ms"
        };
  }

  render() {
    const { part, onGrid } = this.props;
    const { titleClass, wrapperTypeClass, width, transformInner } = this.state;

    return part.type === "custom" ? (
      <div
        className={`datePartsPieceWrapper ${
          css.datePartsPieceWrapper
        } ${onGrid} ${css[`${onGrid}`]}`}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleMouseDown}
        // onTouchEnd={this.handleMouseUp}
        // onMouseEnter={hoverOn}
        // onMouseLeave={hoverOff}
        style={this.isDragging(this.state)}
      >
        <div
          className={`dragInner ${css.dragInner}`}
          style={{
            width: `${part.partLocation === "parts" ? "200px" : width}`
          }}
        >
          {partType(part, titleClass)}
          {part.partLocation === "parts" ? (
            <RemovePart></RemovePart>
          ) : (
            <LengthenPart></LengthenPart>
          )}
        </div>
        {() =>
          transformInner !== "translateX(0px)" ? (
            <EndTimePart></EndTimePart>
          ) : (
            ""
          )
        }
      </div>
    ) : (
      <div
        className={`datePartsPieceWrapper ${
          css.datePartsPieceWrapper
        } ${wrapperTypeClass} ${css[`${wrapperTypeClass}`]} ${onGrid} ${
          css[`${onGrid}`]
        }`}
        // onClick={moreInfo}
        onMouseDown={this.handleMouseDown}
        // onTouchStart={this.handleMouseDown}
        // onMouseEnter={hoverOn}
        // onMouseLeave={hoverOff}
        style={this.isDragging(this.state)}
      >
        <div
          className={`dragInner ${css.dragInner}`}
          style={{
            width: `${part.partLocation === "parts" ? "200px" : width}`,
            transform: transformInner
          }}
        >
          {partType(part, titleClass)}
          {part.partLocation === "parts" ? (
            <RemovePart></RemovePart>
          ) : (
            <LengthenPart></LengthenPart>
          )}
        </div>
        {() =>
          transformInner !== "translateX(0px)" ? (
            <EndTimePart></EndTimePart>
          ) : (
            ""
          )
        }
        {/* <EndTimePart width={width}></EndTimePart> */}
      </div>
    );
  }
}

export default connect(store => {
  return {
    Events: store.eventsReducerAPI,
    Places: store.placesReducerAPI,
    Grid: store.dateGridReducer,
    dispatch: store.dispatch,
    Parts: store.datePartsReducer,
    Squares: store.squaresReducer,
    Hours: store.hoursReducer
  };
})(DragPiece);
