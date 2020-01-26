const inputReducer = (state = {}, action) => {
  switch (action.type) {
    case action.type:
      return (state[action.type] = action.payload);
    default:
      return state;
  }
};

export default inputReducer;
