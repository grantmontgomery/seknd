import React, { useRef, useCallback } from "react";
import css from "./SignIn.css";
import { useState } from "react";
import { useEffect } from "react";
import { loadOptions } from "@babel/core";

const SignIn = () => {
  let [elementOne, setElementOne] = useState(null);
  let [elementTwo, setElementTwo] = useState(null);

  const square = useRef();

  useEffect(() => {
    const currentObserver = observer.current;

    if (elementOne) {
      currentObserver.observe(elementOne);
    }
    if (elementTwo) {
      currentObserver.observe(elementTwo);
    }
  }, [elementOne, elementTwo]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        console.log(entries);
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    )
  );

  return (
    <div className={`signInWrapper ${css.signInWrapper}`}>
      <div className={`testSquare ${css.testSquare}`} ref={setElementOne}>
        <div
          className={`secondSquare ${css.secondSquare}`}
          onClick={() => console.log(square.current)}
        ></div>
      </div>
      <div className={`testSquare ${css.testSquare}`} ref={setElementTwo}>
        <div
          className={`secondSquare ${css.secondSquare}`}
          onClick={() => console.log(square.current)}
        ></div>
      </div>
    </div>
  );
};

export default SignIn;
