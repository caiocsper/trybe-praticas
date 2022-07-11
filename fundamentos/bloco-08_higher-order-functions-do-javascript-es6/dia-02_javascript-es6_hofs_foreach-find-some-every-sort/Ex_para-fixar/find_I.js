const numbers = [19, 21, 30, 3, 45, 22, 15];
const numbers_2ndList = [19, 21, 29, 3, 9, 22, 41];

// 1st Method
const verifyDivisibleBy3And5 = ele => ele % 3 === 0 && ele % 5 === 0;


// 2nd Method
const findDivisibleBy3And5 = arr => arr.find(ele => ele % 3 === 0 && ele % 5 === 0);

// Logs
console.log(numbers.find(verifyDivisibleBy3And5)); // true scenario // element found somewhere in the array => returns the found element
console.log(numbers_2ndList.find(verifyDivisibleBy3And5)); // false scenario // element not found thus undefined => returns undefined
console.log('----------------'); // separator
console.log(findDivisibleBy3And5(numbers)); // true scenario // element found somewhere in the array => returns the found element
console.log(findDivisibleBy3And5(numbers_2ndList)); // false scenario // element not found thus undefined => returns undefined