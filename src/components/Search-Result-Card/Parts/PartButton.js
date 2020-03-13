import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../SearchResultCard.css";
import { actions } from "../../../redux";
import { useEffect } from "react";
import DateParts from "../../Date-Parts/DateParts";

const PartButton = ({ item }) => {
  const [state, setState] = useState({
    input: "+"
  });
  let [typeButton, setType] = useState("");
  const { partsActions, partsChildrenActions } = actions;
  const dispatch = useDispatch();
  const dateParts = useSelector(state => state.datePartsReducer);

  const changeSymbol = event => {
    event.preventDefault();
    if (item.inParts === false) {
      if (dateParts.length < 7) {
        setState({ input: "-" });
        dispatch(partsActions("ADD_PART", item));
        // dispatch(partsChildrenActions({ type: "ADD_CHILD", payload: item }));
        item.inParts = true;
      } else {
        alert("Max 7 parts supported.");
      }
    } else {
      setState({ input: "+" });
      dispatch(partsActions("REMOVE_PART", item.id));
      // dispatch(
      //   partsChildrenActions({ type: "REMOVE_CHILD", payload: item.id })
      // );

      item.inParts = false;
    }
  };

  useEffect(() => {
    if (item.inParts === false) {
      setState({ input: "+" });
    } else {
      setState({ input: "-" });
    }

    item.type === "event" ? setType("eventButton") : setType("placeButton");
  }, [item.inParts, item.type]);

  const { input } = state;
  return (
    <React.Fragment>
      <button
        className={`partButton ${css.partButton} ${typeButton} ${
          css[`${typeButton}`]
        }`}
        onClick={changeSymbol}
      >
        {input}
      </button>
    </React.Fragment>
  );
};

export default PartButton;
