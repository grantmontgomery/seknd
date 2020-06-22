import React from "react";
import css from "./LinksWrapper.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DateParts } from "../../../Date-Parts";
import { useDispatch } from "react-redux";
import { actions } from "../../../../redux";
import { Link } from "react-router-dom";

const LinksWrapper = ({ menu, componentLocation, setMobileState }) => {
  const dispatch = useDispatch();
  const { homeScrollActions } = actions;

  return (
    <React.Fragment>
      <div className={`linksWrapper ${css.linksWrapper}`}>
        <div
          className={`pageLink ${css.pageLink}`}
          onClick={() => dispatch(homeScrollActions("HOME_LEAVE"))}
        >
          <Link style={{ color: "black" }} to="/signin">
            Sign In
          </Link>
        </div>
        <div
          className={`pageLink ${css.pageLink}`}
          onClick={() => dispatch(homeScrollActions("HOME_LEAVE"))}
        >
          <Link style={{ color: "black" }} to="/search">
            Search
          </Link>
        </div>
        <div
          className={`pageLink ${css.pageLink}`}
          onClick={() => dispatch(homeScrollActions("HOME_LEAVE"))}
        >
          <Link style={{ color: "black" }} to="/scheduler">
            Schedule
          </Link>
        </div>
        <div
          className={`pageLink ${css.pageLink}`}
          onClick={() => dispatch(homeScrollActions("HOME_LEAVE"))}
        >
          <Link style={{ color: "black" }} to="/about">
            About
          </Link>
        </div>
        <div
          className={`pageLink ${css.pageLink}`}
          onClick={() => dispatch(homeScrollActions("HOME_LEAVE"))}
        >
          <Link style={{ color: "black" }} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LinksWrapper;
