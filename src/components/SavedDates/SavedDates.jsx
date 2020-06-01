import React from "react";
import { actions } from "../../redux";
import { useSelctor, useSelector, useDispatch } from "react-redux";
import { SavedDatesPart, AddDate, DeleteDate } from "./Parts";
import { Account } from "../Account";
import css from "./SavedDates.css";
import { useEffect } from "react";

const SavedDates = ({ location }) => {
  const dispatch = useDispatch();
  const { scheduledPartsActions } = actions;

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
          <div className={`selectorTextWrapper ${css.selectorTextWrapper}`}>
            <div className={`selectorText ${css.selectorText}`}>Current</div>
          </div>
          <div className={`selectorTextWrapper ${css.selectorTextWrapper}`}>
            <div className={`selectorText ${css.selectorText}`}>Saved</div>
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
            <SavedDatesPart part={part}></SavedDatesPart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedDates;
