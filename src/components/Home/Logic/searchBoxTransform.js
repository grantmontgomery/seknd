const searchBoxTransform = intersectionRatio => {
  let styles = { opacity: "0" };

  if (intersectionRatio >= 0.15) {
    let range = 0.33 - 0.15;
    let difference = 0.33 - intersectionRatio;
    let trueOpacity = (range - difference) * (100 / range);

    styles = { opacity: `${trueOpacity}` };
  } else if (intersectionRatio >= 0.33) {
    styles = { opacity: "1.0" };
  } else {
    styles = { opacity: "0" };
  }
  return styles;
};

export default searchBoxTransform;
