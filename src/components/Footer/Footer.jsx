import React from "react";
import css from "./Footer.css";

const Footer = () => {
  return (
    <div className={`footerWrapper ${css.footerWrapper}`}>
      <footer className={`footer ${css.footer}`}>
        <div className={`createdByWrapper ${css.createdByWrapper}`}>
          <p>Created by </p>
          <a href="https://grantcreates.com/" target="_blank">
            Grant
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
