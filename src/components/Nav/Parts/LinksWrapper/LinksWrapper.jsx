import React from "react";
import css from "./LinksWrapper.css";
import { SocialMedia, CreatedBy } from "../../../Home/Parts";
import { DateParts } from "../../../Date-Parts";
import { useDispatch } from "react-redux";
import { actions } from "../../../../redux";
import { Link } from "react-router-dom";

const LinksWrapper = ({ menu, componentLocation }) => {
  const dispatch = useDispatch();
  const { homeScrollActions } = actions;
  return (
    <div
      className={` ${componentLocation} ${
        css[`${componentLocation}`]
      } ${menu} ${css[`${menu}`]}`}
    >
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
      <SocialMedia location="navLinks"></SocialMedia>
      <CreatedBy location="navLinks"></CreatedBy>
    </div>
  );
};

export default LinksWrapper;
