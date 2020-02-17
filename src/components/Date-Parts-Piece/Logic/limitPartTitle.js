const limitPartTitle = title => {
  if (title.length > 28) {
    if (title.includes(" ") === true) {
      let splittedTitle = title.split(" ");

      while (splittedTitle.join(" ").length > 28) {
        splittedTitle.pop();
      }

      let limitedTitle = splittedTitle.join(" ");

      return limitedTitle + "...";
    } else {
      return title.slice(0, 25) + "...";
    }
  } else {
    return title;
  }
};

export default limitPartTitle;
