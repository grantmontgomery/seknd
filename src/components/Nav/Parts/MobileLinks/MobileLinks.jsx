import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../../redux";
import css from "../../Nav.css";
import { Link } from "react-router-dom";

const MobileLinks = ({ menu }) => {
  const dispatch = useDispatch();
  const { homeScrollActions } = actions;
  return (
    <div className={`mobileLinks ${css.mobileLinks} ${menu} ${css[`${menu}`]}`}>
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
  );
};

export default MobileLinks;
