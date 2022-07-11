const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => arr.reduce( ( acc, cur ) => acc.concat(cur), []);

const flattenEvenMoreDieeeeArray = (arr) => arr.reduce( ( acc, cur ) => {
  acc.push(...cur);
  return acc;
}, []);

console.log(flattenEvenMoreDieeeeArray(arrays));