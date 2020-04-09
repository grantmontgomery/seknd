const scheduleTransform = (start, end, intersectionRatio) => {
  let difference = start - end;
  let intersectionDiff = (intersectionRatio - 0.375) * 8;

  return Math.floor(start + intersectionDiff * difference);
};

export default scheduleTransform;
