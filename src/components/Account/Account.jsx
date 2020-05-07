import React from "react";
import css from "./Account.css";

const Account = ({ page }) => {
  console.log(page);
  return (
    <div
      className={`accountWrapper ${css.accountWrapper} ${page} ${
        css[`${page}`]
      }`}
    >
      <div className={`imageWrapper ${css.imageWrapper}`}>
        <img src="" alt="" />
      </div>
      <div className={`accountName ${css.accountName}`}></div>
    </div>
  );
};

export default Account;
