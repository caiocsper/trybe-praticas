const hydrate = str => {
  const cupsSum = str.match(/\d*\d/g).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
  const newStr = cupsSum.toString();
  
  return newStr >= 2 ? newStr.concat(' copos de água') : newStr.concat(' copo de água')
};

module.exports = hydrate;