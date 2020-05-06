import React from "react";
import css from "./Account.css";

const Account = ({ page }) => {
  return (
    <div className={`accountWrapper ${css.accountWrapper}`}>
      <div className={`imageWrapper ${css.imageWrapper}`}>
        <img src="" alt="" />
      </div>
      <div className={`accountName ${css.accountName}`}></div>
    </div>
  );
};

export default Account;
