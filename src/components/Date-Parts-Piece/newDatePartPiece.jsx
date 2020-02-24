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



    render() { 
        return (  );
    }
}
 
export default DatePartsPiece;