import React, { useRef, useCallback } from "react";
import css from "./SignIn.css";
import { useState } from "react";
import { useEffect } from "react";
import { loadOptions } from "@babel/core";

const SignIn = () => {
  let [element, setElement] = useState(null);
  const square = useRef();

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentElement.unobserve(currentElement);
      }
    };
  }, [element]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];

        console.log(first);
      },
      {
        threshold: 1.0
      }
    )
  );

  return (
    <div className={`signInWrapper ${css.signInWrapper}`}>
      <div className={`testSquare ${css.testSquare}`} ref={setElement}>
        <div
          className={`secondSquare ${css.secondSquare}`}
          onClick={() => console.log(square.current)}
        ></div>
      </div>
    </div>
  );
};

export default SignIn;
