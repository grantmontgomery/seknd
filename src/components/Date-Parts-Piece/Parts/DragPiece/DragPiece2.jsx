import React, { Component } from "react";
import css from "./DragPiece.css";
import partsCSS from "../../../Date-Parts/DateParts.css";
import squareCSS from "../../../Scheduler-Grid-Square/Scheduler-Grid-Square.css";
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
      // currentTarget.hidden = true;
      // const elemBelow = document.elementFromPoint(clientX, clientY);
      // currentTarget.hidden = false;

      currentTarget.hidden = true;
      target.hidden = true;
      const elemBelow = document.elementFromPoint(clientX, clientY);
      currentTarget.hidden = false;
      target.hidden = false;

      console.log(elemBelow, "Droppable element");

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
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    if (
      droppable.className.includes("squareWrapper") === false ||
      droppable === null
    ) {
      const list = document.getElementById("list-wrapper");

      const dateParts = document.getElementsByClassName(
        `${partsCSS.piecesWrapper}`
      )[0].childNodes[0];

      dateParts.append(draggingElement);
    } else {
      droppable.append(draggingElement);
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

  handleMouseMove = ({ target, clientX, clientY }) => {
    const { isDragging } = this.state;
    const { draggingElement } = this.state;

    if (isDragging) {
      // draggingElement.hidden = true;
      // const elemBelow = document.elementFromPoint(clientX, clientY);
      // draggingElement.hidden = false;

      draggingElement.hidden = true;
      target.hidden = true;
      const elemBelow = document.elementFromPoint(clientX, clientY);
      target.hidden = false;
      draggingElement.hidden = false;

      this.setState(state => ({
        droppable: elemBelow,
        translateX: clientX + state.lastTranslateX - state.originalX,
        translateY: clientY + state.lastTranslateY - state.originalY
      }));

      console.log(elemBelow);
    }
  };

  isDragging({ isDragging, translateX, isMoving, translateY }) {
    const { color } = this.props;
    return isDragging
      ? {
          transform: `translate(${translateX}px, ${translateY}px) rotate(5deg)`,
          cursor: "grabbing",
          position: `${isMoving ? "absolute" : "relative"}`,
          zIndex: 1000,
          transition: "none",
          boxShadow: "0 3px 6px 1px rgba(50, 50, 50, 0.5)",
          background: `rgb${color}`
        }
      : {
          transform: "translate(0, 0)",
          position: "relative",
          cursor: "grab",
          zIndex: 1,
          transition: "transform 500ms",
          background: `rgb${color}`
        };
  }

  render() {
    const { part } = this.props;
    const { titleClass, wrapperTypeClass } = this.state;

    return part.type === "custom" ? (
      <div
        className={`datePartsPieceWrapper ${css.datePartsPieceWrapper}`}
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
        } ${wrapperTypeClass} ${css[`${wrapperTypeClass}`]}`}
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
    dispatch: store.dispatch,
    Parts: store.datePartsReducer
  };
})(DragPiece);
