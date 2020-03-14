import React, { Component } from "react";
import css from "./DragPiece.css";
import partsCSS from "../../../Date-Parts/DateParts.css";
import squareCSS from "../../../Scheduler-Grid-Square/SchedulerGridSquare.css";
import { partType } from "./DragLogic";
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
      droppable: null
    };
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  componentDidMount() {
    const { part, index, Grid } = this.props;
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
    // if (part.squareIndex !== null) {
    //   const square = document.getElementsByClassName("squareWrapper")[
    //     part.squareIndex
    //   ];

    //   const squares = document.getElementsByClassName("squareWrapper");

    //   const piece = document.getElementsByClassName("datePartsPieceWrapper")[
    //     index
    //   ];
    //   squares[part.squareIndex].append(piece);
    // }
    if (Grid.start.startDate !== "") {
      const index = part.squareIndex;

      if (part.squareIndex !== null) {
        const squares = document.getElementsByClassName("squareWrapper");
      }
    }
  }

  handleMouseDown = ({ currentTarget, target, clientX, clientY }) => {
    if (
      target.className.includes("removePart") ||
      target.className.includes("xWrapper")
    ) {
      this.removePart();
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("mouseup", this.handleMouseUp);
    } else {
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);

      currentTarget.hidden = true;
      currentTarget.childNodes.forEach(element => (element.hidden = true));
      const elemBelow = document.elementFromPoint(clientX, clientY);
      currentTarget.hidden = false;
      currentTarget.childNodes.forEach(element => (element.hidden = false));

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
    const { part, dispatch, Squares } = this.props;
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
      part.location = "parts";
      part.squareIndex = null;
      part.start = "";
      part.end = "";
      dateParts.appendChild(draggingElement);
    } else {
      const piecesWrapper = document.getElementsByClassName(
        `${partsCSS.piecesWrapper}`
      )[0].childNodes[0];

      console.log(piecesWrapper.childNodes);

      const squares = document.getElementsByClassName("squareWrapper");

      droppable.appendChild(draggingElement);
      part.location = "grid";
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

      // const piecesWrapper = document.getElementsByClassName(
      //   `${partsCSS.piecesWrapper}`
      // )[0].childNodes[0];

      // console.log(piecesWrapper.childNodes);
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

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { draggingElement } = this.state;

    if (isDragging) {
      draggingElement.hidden = true;
      draggingElement.childNodes.forEach(element => (element.hidden = true));

      const elemBelow = document.elementFromPoint(clientX, clientY);

      draggingElement.hidden = false;
      draggingElement.childNodes.forEach(element => (element.hidden = false));

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
    const { titleClass, wrapperTypeClass } = this.state;

    return part.type === "custom" ? (
      <div
        className={`datePartsPieceWrapper ${
          css.datePartsPieceWrapper
        } ${onGrid} ${css[`${onGrid}`]}`}
        onMouseDown={this.handleMouseDown}
        // onMouseEnter={hoverOn}
        // onMouseLeave={hoverOff}
        style={this.isDragging(this.state)}
      >
        {partType(part, titleClass)}
        <div
          className={`removePart ${css.removePart}`}
          // onClick={this.removePart}
        >
          <div className={`xWrapper ${css.xWrapper}`}>X</div>
        </div>
        {/* {extendedSmall()} */}
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
        // onMouseEnter={hoverOn}
        // onMouseLeave={hoverOff}
        style={this.isDragging(this.state)}
      >
        {partType(part, titleClass)}
        <div
          className={`removePart ${css.removePart}`}
          // onClick={this.removePart}
        >
          <div className={`xWrapper ${css.xWrapper}`}>X</div>
        </div>
        {/* {extendedSmall()} */}
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
    Squares: store.squaresReducer
  };
})(DragPiece);
