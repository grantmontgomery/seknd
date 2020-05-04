import React, { useRef, useCallback } from "react";
import css from "./SignIn.css";
import { useState } from "react";
import { useEffect } from "react";
import { loadOptions } from "@babel/core";

const SignIn = () => {
  return (
    <div className={`signInWrapper ${css.signInWrapper}`}>
      <div className={`animationWrapper ${css.animationWrapper}`}>
        <div className={`secondHandWrapper ${css.secondHandWrapper}`}>
          <div className={`innerWrapper ${css.innerWrapper}`}>
            <div className={`secondHand ${css.secondHand}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
