import React from "react";
import css from "./LinksWrapper.css";
import { SocialMedia, CreatedBy } from "../../../Home/Parts";
import { ModalDark } from "../../../ModalDark";
import { DateParts } from "../../../Date-Parts";
import { useDispatch } from "react-redux";
import { actions } from "../../../../redux";
import { Link } from "react-router-dom";

const LinksWrapper = ({
  menu,
  componentLocation,
  setMobileState,
  hamburger,
}) => {
  const dispatch = useDispatch();
  const { homeScrollActions } = actions;

  const handleTap = () => {
    return hamburger === "hamburger"
      ? setMobileState({
          searchBoxNav: "retracted",
          partsIcon: "normal",
          partsList: "retracted",
          menu: "extended",
          hamburger: "exit",
        })
      : setMobileState((state) => ({
          ...state,
          menu: "retracted",
          hamburger: "hamburger",
        }));
  };
  return (
    <React.Fragment>
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
      {/* <div
        className={`modalDark ${css.modalDark} ${menu} ${css[`${menu}`]}`}
        onClick={handleTap}
      ></div> */}
      <ModalDark
        display={hamburger === "hamburger" ? "none" : "block"}
        component="mobileLinks"
      ></ModalDark>
    </React.Fragment>
  );
};

export default LinksWrapper;
