const selectPartsScrollDown = (start, end, angle, intersectionRatio) => {
  const styles = {};
  if (intersectionRatio <= 0.25) {
    let difference = start - end;
    let intersectionDiff = intersectionRatio * 4;
    let translateEquation = end + (1 - intersectionDiff) * difference;
    let opacityRatio =
      intersectionRatio >= 0.125 ? `${0.25 - intersectionRatio * 8}` : "1";
    styles.opacity = `${opacityRatio}`;

    styles.transform = `${angle} translateY(${translateEquation}%)`;
  }
  return styles;
};

export default selectPartsScrollDown;
