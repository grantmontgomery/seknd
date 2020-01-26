const changeInputs = input => {
  return {
    type: Object.keys(input).join(),
    // payload: Object.values(input).join()
    payload: input
  };
};

export default changeInputs;
