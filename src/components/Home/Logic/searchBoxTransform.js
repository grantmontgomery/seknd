const searchBoxTransform = intersectionRatio => {
  let styles = { opacity: "0" };

  if (intersectionRatio >= 0.35) {
    let range = 0.6 - 0.35;
    let difference = 0.6 - intersectionRatio;
    let trueOpacity = (range - difference) * 4;

    styles = { opacity: `${trueOpacity}` };
  } else if (intersectionRatio >= 0.6) {
    styles = { opacity: "1.0" };
  } else {
    styles = { opacity: "0" };
  }
  return styles;
};

export default searchBoxTransform;
