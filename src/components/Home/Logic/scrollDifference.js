const scrollDifference = (max, min, intersectionRatio) => {
  // let difference = max - min > 0 ? max - min : -1 * (max - min);
  let difference = max - min;
  let intervalDifference = difference / 66;
  let stepDifference = 66 * (1 - intersectionRatio);

  return Math.floor(max - stepDifference * intervalDifference);
};

export default scrollDifference;
