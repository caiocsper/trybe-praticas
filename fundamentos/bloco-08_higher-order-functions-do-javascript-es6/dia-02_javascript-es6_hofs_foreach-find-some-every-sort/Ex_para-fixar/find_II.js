const names = ['João', 'Irene', 'Fernando', 'Maria'];
const names_2ndList = ['João', 'Luiz', 'Caio', 'Lara'];

// 1st Method
const verifyNameWithFiveLetters = ele => ele.length === 5;

// 2nd Method
const findNameWithFiveLetters = arr => arr.find(ele => ele.length === 5);

// Logs
console.log(names.find(verifyNameWithFiveLetters)); // true scenario // element found somewhere in the array => returns the found element
console.log(names_2ndList.find(verifyNameWithFiveLetters)); // false scenario // element not found thus undefined => returns undefined
console.log('----------------'); // separator
console.log(findNameWithFiveLetters(names)); // true scenario // element found somewhere in the array => returns the found element
console.log(findNameWithFiveLetters(names_2ndList)); // false scenario // element not found thus undefined => returns undefined