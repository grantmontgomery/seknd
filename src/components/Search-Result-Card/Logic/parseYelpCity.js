const parseYelpCity = addressPiece => {
  let splitted = addressPiece.split(",");
  if (splitted[0] === splitted[0].toUpperCase()) {
    if (splitted[0].includes(" ")) {
      let splitCity = splitted[0].split(" ");
      for (let i = 0; i < splitCity.length; i++) {
        splitCity[i].toLowerCase();
        splitCity[i][0].toUpperCase();
      }
      let newCity = splitCity.join(" ");
      return splitted.splice(0, 1, newCity);
    } else {
      let newCity =
        splitted[0][0].toUpperCase() + splitted[0].toLowerCase().substring(1);
      splitted.splice(0, 1, newCity);
      return splitted.join(",");
    }
  } else {
    return splitted.join(",");
  }
};

export default parseYelpCity;
