const removeSpaces = (string) => {
  const words = string.split(" ");
  return words.join("%20");
};

const addSpaces = (string) => {
  const words = string.split("%20");
  return words.join(" ");
};

export { addSpaces, removeSpaces };
