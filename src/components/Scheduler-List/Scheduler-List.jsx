import React, { useState, useEffect } from "react";
import css from "./Scheduler-List.css";

const SchedulerList = () => {
  const [state, setState] = useState({ input: "" });
  useEffect(() => {
    return setState(state => ({ ...state, input: "" }));
  }, []);
  console.log(state.input);
  return (
    <div className={`schedulerListWrapper ${css.schedulerListWrapper}`}>
      <div className={`newPieceWrapper ${css.newPieceWrapper}`}>
        <input
          value={state.input}
          onChange={event => setState({ input: event.target.value })}
          type="text"
        />
      </div>
      <div className={`newPieceButton ${css.newPieceButton}`}></div>
    </div>
  );
};

export default React.memo(SchedulerList);
