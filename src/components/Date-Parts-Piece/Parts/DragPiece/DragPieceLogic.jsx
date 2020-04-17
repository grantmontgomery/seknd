import React, { Component } from "react";
import css from "./DragPiece.css";
import DragPieceDisplay from "./DragPieceDisplay";
import partsCSS from "../../../Date-Parts/DateParts.css";
import { RemovePart, LengthenPart, EndTimePart } from "./DragParts";
import squareCSS from "../../../Scheduler-Grid-Square/SchedulerGridSquare.css";
import { partType, timePosition } from "./DragLogic";
import { connect } from "react-redux";
import { actions } from "../../../../redux/actions";

class DragPieceLogic extends Component {
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
      transformInner: "translateX(0px)",
      rotateArrow: "rotate(0)",
    };
  }

  changeLength = (value) => {
    const { part } = this.props;
    console.log(value);
    if (typeof value === "object") {
      const { pixels } = value;
      let innerPixels = pixels * 2;
      part.wrapperWidth = pixels;
      console.log(`${pixels}px`);
      part.innerWidth = innerPixels;
    } else {
    }
  };

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  componentDidMount() {
    this.props.part.type === "event"
      ? this.setState((state) => ({
          ...state,
          titleClass: "eventTitle",
          wrapperTypeClass: "eventWrapper",
        }))
      : this.setState((state) => ({
          ...state,
          titleClass: "placeTitle",
          wrapperTypeClass: "placeWrapper",
        }));
  }

  handleMouseDown = ({ currentTarget, target, clientX, clientY }) => {
    console.log(target.getAttribute("type"));
    if (target.getAttribute("type") !== "drag") {
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("mouseup", this.handleMouseUp);
      if (
        target.className.includes("removePart") ||
        target.className.includes("xWrapper")
      ) {
        this.removePart();
      } else if (
        target.className.includes("lengthenWrapper") ||
        target.className.includes("oWrapper")
      ) {
        this.lengthenPart();
        const { rotateArrow } = this.setState;
        rotateArrow === "rotate(0)"
          ? this.setState((state) => ({
              ...state,
              rotateArrow: "rotate(180deg)",
            }))
          : this.setState((state) => ({ ...state, rotateArrow: "rotate(0)" }));
      }

      // } else if (target.className.includes("endTimeWrapper")) {

      // }
    } else {
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);

      currentTarget.hidden = true;
      currentTarget.childNodes[0].hidden = true;
      currentTarget.childNodes[0].childNodes.forEach(
        (element) => (element.hidden = true)
      );
      const elemBelow = document.elementFromPoint(clientX, clientY);
      currentTarget.hidden = false;
      currentTarget.childNodes[0].hidden = false;
      currentTarget.childNodes[0].childNodes.forEach(
        (element) => (element.hidden = false)
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
        droppable: elemBelow,
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
                payload: { part, index: i },
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
                payload: { part, index: i },
              })
            );
          }
        }
      }

      part.partStart = timePosition(part.squareIndex, Hours, Squares);
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

  hoverOn = () => {
    const { part } = this.props;
    this.setState((state) => ({
      ...state,
      hoverClass: {
        boxShadow: `0px 0px 10px rgba(${part.color}, 0.5)`,
        transition: "250ms ease-out",
      },
    }));
  };

  hoverOff = () => {
    this.setState((state) => ({
      ...state,
      hoverClass: {
        boxShadow: "",
        transition: "250ms ease-in",
      },
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
    const { part } = this.props;

    console.log(part.wrapperWidth);
    if (transformInner === "translateX(0px)") {
      this.setState((state) => ({
        ...state,
        transformInner: `translateX(-${part.wrapperWidth - 40}px)`,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        transformInner: "translateX(0px)",
      }));
    }
  };

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { draggingElement } = this.state;

    if (isDragging) {
      draggingElement.hidden = true;
      draggingElement.childNodes[0].hidden = true;
      draggingElement.childNodes[0].childNodes.forEach(
        (element) => (element.hidden = true)
      );

      const elemBelow = document.elementFromPoint(clientX, clientY);

      draggingElement.hidden = false;
      draggingElement.childNodes[0].hidden = false;
      draggingElement.childNodes[0].childNodes.forEach(
        (element) => (element.hidden = false)
      );

      this.setState((state) => ({
        droppable: elemBelow,
        translateX: clientX + state.lastTranslateX - state.originalX,
        translateY: clientY + state.lastTranslateY - state.originalY,
      }));
    }
  };

  isDragging(
    { isDragging, translateX, isMoving, translateY, droppable },
    { hoverClass },
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
          ...hoverClass,
          width: partLocation === "parts" ? "200px" : `${wrapperWidth}px`,
        };
  }

  render() {
    const { part, onGrid } = this.props;

    return (
      <DragPieceDisplay
        partType={partType}
        onGrid={onGrid}
        dragState={this.state}
        handleMouseDown={this.handleMouseDown}
        handleMouseUp={this.handleMouseUp}
        part={part}
        changeLength={this.changeLength}
        isDragging={this.isDragging}
      ></DragPieceDisplay>
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
    Squares: store.squaresReducer,
    Hours: store.hoursReducer,
  };
})(DragPieceLogic);
