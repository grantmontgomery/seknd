import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DatePartsPiece } from "../Date-Parts-Piece";
import { NewInput, ColorSelector } from "./Parts";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";
import css from "./DateParts.css";

const DateParts = ({ page }) => {
  const dateParts = useSelector(state => state.datePartsReducer);

  const dispatch = useDispatch();
  const { partsActions } = actions;

  let [pageType, setPage] = useState("");

  const [newPart, setPart] = useState({
    name: "",
    color: "0, 78, 100",
    type: "custom",
    detailOne: "",
    detailTwo: "",
    id: ""
  });

  const { name, color } = newPart;

  const applyTransitions = () => {
    return dateParts.map(part => (
      <CSSTransition key={part.id} timeout={400} classNames="slide-transition">
        <DatePartsPiece key={part.id} page={page} part={part}></DatePartsPiece>
      </CSSTransition>
    ));
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    target.getAttribute("input") === "name"
      ? setPart(state => ({
          ...state,
          name: value,
          id: `${value}${Math.random()}`
        }))
      : setPart(state => ({ ...state, color: target.getAttribute("value") }));
  };

  const handleSubmit = () => {
    if (name !== "" && color !== "") {
      dispatch(partsActions("ADD_PART", newPart));
      setPart(state => ({ ...state, id: "", name: "" }));
    } else {
      alert("Fill out missing Date Part Ideas");
    }
  };

  useEffect(() => {
    page === "scheduler" ? setPage("schedulerPage") : setPage("searchPage");
  }, [page]);

  return (
    <div
      className={`datePartsWrapper ${css.datePartsWrapper} ${pageType} ${
        css[`${pageType}`]
      } 
     `}
    >
      <div className={`partsHeader ${css.partsHeader}`}>
        <div className={`partsTitle ${css.partsTitle}`}>DATE PARTS</div>
        <NewInput
          handleChange={handleChange}
          name={name}
          pageType={pageType}
        ></NewInput>
        <ColorSelector
          pageType={pageType}
          handleChange={handleChange}
          color={color}
        ></ColorSelector>
        <button
          className={`createPart ${css.createPart}`}
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div className={`piecesWrapper ${css.piecesWrapper}`}>
        <TransitionGroup>{applyTransitions()}</TransitionGroup>
      </div>
    </div>
  );
};

export default DateParts;
