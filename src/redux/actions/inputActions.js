const changeInputs = input => {
  return {
    type: Object.keys(input).join(),
    payload: input
  };
};

const inputActions = { changeInputs };

export default inputActions;
