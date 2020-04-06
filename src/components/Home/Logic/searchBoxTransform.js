const searchBoxTransform = (intersectionRatio) => {
  let styles = { opacity: "0" };

  if (intersectionRatio >= 0.25) {
    let intersectionDiff = (0.5 - intersectionRatio) * 4;

    styles = { opacity: `${1 - intersectionDiff}` };
  } else if (intersectionRatio >= 0.5) {
    styles = { opacity: "1.0" };
  } else {
    styles = { opacity: "0" };
  }
  return styles;
};

export default searchBoxTransform;
