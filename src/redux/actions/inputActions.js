const changeInputs = input => {
  if (typeof input === "object") {
    return {
      type: Object.keys(input).join(),
      payload: input
    };
  } else {
    return { type: input };
  }
};

const inputActions = { changeInputs };

export default inputActions;
