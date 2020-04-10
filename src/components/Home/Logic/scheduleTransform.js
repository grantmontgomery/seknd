const scheduleTransform = (start, end, intersectionRatio) => {
  const styles = {};

  let difference = start > 0 ? start - end : -1 * start - end;
  let intersectionDiff = (intersectionRatio - 0.375) * 8;

  styles.opacity = `${intersectionDiff}`;
  styles.transform = `rotate(5deg) translate(${Math.floor(
    start + intersectionDiff * difference
  )}%, -100%)`;

  return styles;
};

export default scheduleTransform;
