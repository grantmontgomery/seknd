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
  }, [element]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];

        console.log(first.isIntersecting);
        console.log(first);

        console.log(first.intersectionRatio);
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
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
