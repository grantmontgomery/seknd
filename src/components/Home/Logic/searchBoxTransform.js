const searchBoxTransform = (intersectionRatio) => {
  let styles = { opacity: "0" };

  if (intersectionRatio >= 0.25) {
    let range = 25;
    let difference = 0.5 - intersectionRatio;
    let trueOpacity = (range - difference) * (1 / range);

    styles = { opacity: `${trueOpacity}` };
  } else if (intersectionRatio >= 0.5) {
    styles = { opacity: "1.0" };
  } else {
    styles = { opacity: "0" };
  }
  return styles;
};

export default searchBoxTransform;
