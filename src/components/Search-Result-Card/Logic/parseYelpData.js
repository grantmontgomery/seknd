const parseYelpData = input => {
  let splitted = input.split("-");
  for (let i = 0; i < splitted.length; i++) {
    let firstLetter = splitted[i][0].toUpperCase();
    let subString = splitted[i].substring(1);
    let finishedString = firstLetter + subString;
    splitted.splice(i, 1, finishedString);
  }
  let joined = splitted.join(" ");
  return joined;
};

export default parseYelpData;
