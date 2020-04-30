const sortingParts = (parts) => {
  return parts.sort((a, b) => a.savedOrderStart - b.savedOrderEnd);
};

return sortingParts;
