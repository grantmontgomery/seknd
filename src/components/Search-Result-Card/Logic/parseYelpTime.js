const parseYelpTime = input => {
  let timeFormatted = input.substring(0, 19);
  let dateFormatted = new Date(timeFormatted);

  console.log(dateFormatted.toLocaleTimeString());
  console.log(dateFormatted.toLocaleDateString());

  //   Must go back and format time based on inputted time in search box.
};

export default parseYelpTime;
