const toSingular = input => {
  if (input.length !== 0) {
    const indexLastLetter = input.length - 1;
    if (input[indexLastLetter] === "s") {
      if (input.indexOf("ies") !== -1) {
        let pluralIndex = input.indexOf("ies");
        let subString1 = input.substring(0, pluralIndex);
        return subString1 + "y";
      } else {
        let subString1 = input.substring(0, indexLastLetter);
        return subString1;
      }
    } else {
      return input;
    }
  }
};

export default toSingular;
