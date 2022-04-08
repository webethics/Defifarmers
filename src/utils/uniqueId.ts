let idCounter = 0;
const uniqueId = (prefix = "") => {
  idCounter += 1;

  return `${prefix}${idCounter}`;
};

export default uniqueId;
