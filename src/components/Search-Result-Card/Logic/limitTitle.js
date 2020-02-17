const limitTitle = title => {
  if (title.length > 40) {
    if (title.includes(" ") === true) {
      let splittedTitle = title.split(" ");

      while (splittedTitle.join(" ").length > 40) {
        splittedTitle.pop();
      }

      let limitedTitle = splittedTitle.join(" ");

      return limitedTitle + "...";
    } else {
      return title.slice(0, 37) + "...";
    }
  } else {
    return title;
  }
};

export default limitTitle;
