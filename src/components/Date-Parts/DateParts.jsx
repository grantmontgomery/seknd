import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DatePartsPiece } from "../Date-Parts-Piece";
import { NewInput, ColorSelector } from "./Parts";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";
import css from "./DateParts.css";

const DateParts = ({ location, displayDrag, partsList }) => {
  const dateParts = useSelector((state) => state.datePartsReducer);

  const dispatch = useDispatch();
  const { partsActions } = actions;

  let [page, setPage] = useState("");

  const [newPart, setPart] = useState({
    name: "",
    color: "0, 78, 100",
    type: "custom",
    detailOne: "",
    detailTwo: "",
    id: "",
  });

  const { name, color } = newPart;

  // const applyTransitions = () => {
  //   return dateParts.map((part, index) => (
  //     <CSSTransition
  //       key={part.id}
  //       timeout={400}
  //       classNames={`slideTransition ${css.slideTransition}`}
  //     >
  //       <DatePartsPiece
  //         index={index}
  //         key={part.id}
  //         id={part.id}
  //         location={location}
  //         part={part}
  //       ></DatePartsPiece>
  //     </CSSTransition>
  //   ));
  // };

  const handleChange = ({ target }) => {
    const { value } = target;
    target.getAttribute("input") === "name"
      ? setPart((state) => ({
          ...state,
          name: value,
          id: `${value}${Math.random()}`,
        }))
      : setPart((state) => ({ ...state, color: target.getAttribute("value") }));
  };

  const handleSubmit = () => {
    if (dateParts.length < 7) {
      if (name !== "" && color !== "") {
        dispatch(partsActions("ADD_PART", newPart));
        setPart((state) => ({ ...state, id: "", name: "" }));
      } else {
        alert("Fill out missing Date Part Ideas");
      }
    } else {
      alert("Max 7 parts supported.");
    }
  };

  // useEffect(() => {
  //   location === "scheduler" ? setPage("schedulerPage") : setPage("searchPage");
  // }, [location]);

  return (
    <div
      className={`datePartsWrapper ${css.datePartsWrapper} ${location} ${
        css[`${location}`]
      } 
     ${partsList} ${css[`${partsList}`]}`}
      onMouseEnter={() =>
        location === "scheduler" ? displayDrag("enter") : null
      }
      onMouseLeave={() =>
        location === "scheduler" ? displayDrag("exit") : null
      }
    >
      <div className={`partsHeader ${css.partsHeader}`}>
        <div className={`partsTitle ${css.partsTitle}`}>DATE PARTS</div>
        <NewInput
          handleChange={handleChange}
          name={name}
          location={location}
        ></NewInput>
        <ColorSelector
          location={location}
          handleChange={handleChange}
          color={color}
          handleSubmit={handleSubmit}
        ></ColorSelector>
      </div>
      <div className={`piecesWrapper ${css.piecesWrapper}`} type="parts">
        <div className={`piecesInner ${css.piecesInner}`}>
          {dateParts.map((part, index) => (
            <DatePartsPiece
              index={index}
              key={part.id}
              id={part.id}
              location={location}
              part={part}
            ></DatePartsPiece>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateParts;
