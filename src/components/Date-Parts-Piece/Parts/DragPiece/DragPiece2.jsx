import React, { Component } from "react";
import css from "./DragPiece.css";
import { partType } from "./DragLogic";
import { connect } from "react-redux";

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
      draggable: false
    };
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  componentDidMount() {
    this.props.page === "scheduler"
      ? this.setState(state => ({ ...state, draggable: true }))
      : this.setState(state => ({ ...state, draggable: false }));
    this.props.type === "event"
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

  handleMouseDown = ({ target, clientX, clientY }) => {
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
    target.hidden = true;
    const elemBelow = document.elementFromPoint(clientX, clientY);
    target.hidden = false;

    this.setState({
      isDragging: true,
      originalX: clientX,
      originalY: clientY,
      draggingElement: target,
      droppable: elemBelow
    });
  };

  handleMouseUp = () => {
    const { droppable, draggingElement } = this.state;
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    if (droppable.className !== "square-wrapper" || droppable === null) {
      const list = document.getElementById("list-wrapper");
      list.append(draggingElement);
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

  // removePart = event => {
  //   event.preventDefault();
  //   const { part } = this.props;
  //   if (part.type === "event") {
  //     const { items } = Events;
  //     for (let i = 0; i < items.length; i++) {
  //       if (part.id === items[i].id) {
  //         items[i].inParts = false;
  //       }
  //     }
  //   } else {
  //     const { items } = Places;
  //     for (let i = 0; i < items.length; i++) {
  //       if (part.id === items[i].id) {
  //         items[i].inParts = false;
  //       }
  //     }
  //   }
  //   dispatch(partsActions("REMOVE_PART", part.id));
  // };

  // setInline = (draggable) => {
  //   if(draggable){

  //   }
  // }

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { draggingElement } = this.state;

    if (isDragging) {
      draggingElement.hidden = true;
      const elemBelow = document.elementFromPoint(clientX, clientY);
      draggingElement.hidden = false;
      this.setState(state => ({
        droppable: elemBelow,
        translateX: clientX + state.lastTranslateX - state.originalX,
        translateY: clientY + state.lastTranslateY - state.originalY
      }));
    }
  };

  render() {
    const { part } = this.props;
    const { titleClass, wrapperTypeClass } = this.state;

    console.log(this.props);

    return part.type === "custom" ? (
      <div
        className={`datePartsPieceWrapper ${css.datePartsPieceWrapper}`}
        onMouseDown={this.handleMouseDown}
        // onMouseEnter={hoverOn}
        // onMouseLeave={hoverOff}
        style={this.styles}
      >
        {partType(part, titleClass)}
        <div
          className={`removePart ${css.removePart}`} /*onClick={removePart}*/
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

      //   <div
      //     className={`datePartsPieceWrapper ${
      //       css.datePartsPieceWrapper
      //     } ${wrapperTypeClass} ${
      //       css[`${wrapperTypeClass}`]
      //     } ${wrapperMorphClass} ${css[`${wrapperMorphClass}`]}`}
      //     onClick={moreInfo}
      //   >
      //     {partType(part, titleClass)}
      //     <div className={`removePart ${css.removePart}`} onClick={removePart}>
      //       <div className={`xWrapper ${css.xWrapper}`}>X</div>
      //     </div>
      //     {extendedSmall()}
      //   </div>
    );
  }
}

function mapStateToProps({ datePartsReducer }) {
  return {
    datePartsReducer
  };
}
// export default DragPiece;

export default connect(mapStateToProps)(DragPiece);
