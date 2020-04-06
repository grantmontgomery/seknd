const scrollDifference = (max, min, intersectionRatio) => {
  let difference = max - min;
  let intervalDifference = difference / (50 / 2);
  let stepDifference = (50 / 2) * (1 - intersectionRatio);

  return Math.floor(max - stepDifference * intervalDifference);
};

export default scrollDifference;
