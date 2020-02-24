import React, { Component } from 'react';
import css from "./DatePartsPiece.css"



class DatePartsPiece extends Component {
    constructor(props}) {
        super(props)
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
            draggable: false,
            titleClass: "",
            wrapperTypeClass: "",
        }
    }
    
    componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  componentDidMount() {
      props.page === "scheduler" ? this.setState(state => ({...state, draggable: true}))
        props.type === "event" ? this.setState(state => ({...state, titleClass: "eventTitle", wrapperTypeClass: "eventWrapper"})) : this.setState(state => ({...state, titleClass: "placeTitle", wrapperTypeClass: "placeWrapper"}))
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
    this.setState({
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
    });
  };


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
        return  
          <div
      className={`datePartsPieceWrapper ${
        css.datePartsPieceWrapper
      } ${wrapperTypeClass} ${
        css[`${wrapperTypeClass}`]
      } ${wrapperMorphClass} ${css[`${wrapperMorphClass}`]}`}
      onClick={moreInfo}
    >
      {partType(part, titleClass)}
      <div className={`removePart ${css.removePart}`} onClick={removePart}>
        <div className={`xWrapper ${css.xWrapper}`}>X</div>
      </div>
      {extendedSmall()}
    </div>
            
          
    }
}
 
export default DatePartsPiece;