import React from "react";
import { useSelector } from "react-redux";
import css from "./Account.css";
import { check } from "prettier";

const Account = ({ page }) => {
  const signedIn = useSelector((state) => state.accountReducer);

  const checkAccount = () => {
    return signedIn ? (
      <React.Fragment>
        <div className={`imageWrapper ${css.imageWrapper}`}>
          <img src="" alt="" />
        </div>
        <div className={`accountName ${css.accountName}`}></div>
      </React.Fragment>
    ) : (
      <div className={`signIn ${css.signIn}`}></div>
    );
  };

  return (
    <div
      className={`accountWrapper ${css.accountWrapper} ${page} ${
        css[`${page}`]
      }`}
    >
      {checkAccount()}
    </div>
  );
};

export default Account;
