const scrollDifference = (max, min, intersectionRatio) => {
  let difference = max - min;
  let intersectionDiff = (0.5 - intersectionRatio) * 4;

  return Math.floor(min + (1 - intersectionDiff) * difference);
};

export default scrollDifference;
