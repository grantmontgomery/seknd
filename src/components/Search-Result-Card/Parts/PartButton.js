import React, { useState } from "react";
import { useDispatch } from "react-redux";
import css from "../SearchResultCard.css";
import { actions } from "../../../redux";
import { useEffect } from "react";

const PartButton = ({ item }) => {
  const [state, setState] = useState({
    input: "+"
  });
  const { partsActions } = actions;
  const dispatch = useDispatch();

  const changeSymbol = event => {
    event.preventDefault();
    if (!item.inParts) {
      setState(state => ({ ...state, input: "-" }));
      dispatch(partsActions("ADD_PART", item));
      item.inParts = true;
    } else {
      setState(state => ({ ...state, input: "+" }));
      dispatch(partsActions("REMOVE_PART", item.id));
      item.inParts = false;
    }
  };

  useEffect(() => {
    console.log(item.inParts);
    if (!item.inParts) {
      setState(state => ({ ...state, input: "+" }));
    } else {
      setState(state => ({ ...state, input: "-" }));
    }
  }, [item.inParts]);

  const { input } = state;
  return (
    <React.Fragment>
      <button
        className={`partButton ${css.partButton}`}
        onClick={event => changeSymbol(event, item)}
      >
        {input}
      </button>
    </React.Fragment>
  );
};

export default PartButton;
