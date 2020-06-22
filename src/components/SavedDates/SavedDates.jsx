import React from "react";
import { actions } from "../../redux";
import { useSelctor, useSelector, useDispatch } from "react-redux";
import { SavedDatesPart, AddDate, DeleteDate } from "./Parts";
import { Account } from "../Account";
import css from "./SavedDates.css";
import { useEffect } from "react";
import { useState } from "react";

const SavedDates = ({ location }) => {
  const dispatch = useDispatch();
  const { scheduledPartsActions } = actions;

  const [selected, select] = useState("Current");

  const dateParts = useSelector((state) => state.datePartsReducer);
  const { parts } = useSelector((state) => state.scheduledPartsReducer);
  useEffect(() => {
    dispatch(
      scheduledPartsActions({
        type: "UPDATE_SCHEDULED_PARTS",
        payload: dateParts
          .filter((part) => part.onGrid === true)
          .sort((a, b) => a.savedOrderStart - b.savedOrderStart),
      })
    );
  }, [dateParts]);

  return (
    <div className={`${location} ${css[`${location}`]}`}>
      <div className={`headerWrapper ${css.headerWrapper}`}>
        <div className={`sectionTitle ${css.sectionTitle}`}>DATES</div>
        <Account location={location}></Account>
        <div className={`selectorWrapper ${css.selectorWrapper}`}>
          <div
            className={`savedSlider ${css.savedSlider}`}
            style={{ left: `${selected === "Current" ? "10%" : "60%"}` }}
          ></div>
          <div
            className={`mobileSlider ${css.mobileSlider}`}
            style={{ left: `${selected === "Current" ? "10%" : "60%"}` }}
          ></div>
          <div
            className={`selectorTextWrapper ${css.selectorTextWrapper}`}
            onClick={() => select("Current")}
          >
            <div
              className={`selectorText ${css.selectorText}`}
              style={{ color: `${selected === "Current" ? "white" : "black"}` }}
            >
              Current
            </div>
          </div>
          <div
            className={`selectorTextWrapper ${css.selectorTextWrapper}`}
            onClick={() => select("Saved")}
          >
            <div
              className={`selectorText ${css.selectorText}`}
              style={{ color: `${selected === "Current" ? "black" : "white"}` }}
            >
              Saved
            </div>
          </div>
          <div className={`addDeleteWrapper ${css.addDeleteWrapper}`}>
            <AddDate></AddDate>
            <DeleteDate></DeleteDate>
          </div>
        </div>
      </div>
      <div className={`datesWrapper ${css.datesWrapper}`}>
        <div className={`datesInner ${css.datesInner}`}>
          {parts.map((part) => (
            <SavedDatesPart key={part.id} part={part}></SavedDatesPart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedDates;
