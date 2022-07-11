const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minAge) => arr.every(ele => ele.age >= minAge);

// Logs
console.log(verifyAges(people, 16)); // true scenario // every element fits the criteria => returns true
console.log(verifyAges(people, 18)); // false scenario // at least one element doesnt fit the criteria => returns false