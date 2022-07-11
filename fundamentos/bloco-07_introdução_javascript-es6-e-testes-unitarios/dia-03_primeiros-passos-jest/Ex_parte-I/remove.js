const myRemove = (arr, item) => {
  if (arr.includes(item)) arr.splice(arr.indexOf(item), 1);

  return arr;
};

module.exports = myRemove