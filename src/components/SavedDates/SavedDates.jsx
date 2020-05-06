import React from "react";
import { actions } from "../../redux";
import { useSelctor, useSelector, useDispatch } from "react-redux";
import { SavedDatesPart } from "./Parts";
import css from "./SavedDates.css";
import { useEffect } from "react";

const SavedDates = () => {
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
    <div className={`savedWrapper ${css.savedWrapper}`}>
      <div className={`headerWrapper ${css.headerWrapper}`}>
        <div className={`sectionTitle ${css.sectionTitle}`}>DATES</div>
        <div className={`accountWrapper ${css.accountWrapper}`}>
          <div className={`accountText ${css.accountText}`}>Account</div>
        </div>
        <div className={`selectorWrapper ${css.selectorWrapper}`}>
          <div className={`selectorTextWrapper ${css.selectorTextWrapper}`}>
            <div className={`selectorText ${css.selectorText}`}>Current</div>
          </div>
          <div className={`selectorTextWrapper ${css.selectorTextWrapper}`}>
            <div className={`selectorText ${css.selectorText}`}>Saved</div>
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
