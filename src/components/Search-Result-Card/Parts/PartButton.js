import React, { useState } from "react";
import { useDispatch } from "react-redux";
import css from "../SearchResultCard.css";
import { actions } from "../../../redux";
import { useEffect } from "react";

const PartButton = ({ item }) => {
  const [state, setState] = useState({
    input: "+"
  });
  let [typeButton, setType] = useState("");
  const { partsActions } = actions;
  const dispatch = useDispatch();

  const changeSymbol = event => {
    event.preventDefault();
    if (item.inParts === false) {
      setState({ input: "-" });
      dispatch(partsActions("ADD_PART", item));
      item.inParts = true;
    } else {
      setState({ input: "+" });
      dispatch(partsActions("REMOVE_PART", item.id));
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
