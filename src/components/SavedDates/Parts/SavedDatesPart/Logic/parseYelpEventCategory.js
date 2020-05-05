const parseYelpEventCategory = (input) => {
  return `${input[0].toUpperCase()}${input.substring(1)}`;
};

export default parseYelpEventCategory;
