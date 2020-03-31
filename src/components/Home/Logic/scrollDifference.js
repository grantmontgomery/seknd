const scrollDifference = (max, min, intersectionRatio) => {
  let difference = max - min > 0 ? max - min : -1 * (max - min);
  let intervalDifference = difference / 66;

  return max - (66 * intersectionRatio)(intervalDifference);
};
